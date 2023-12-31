import { toast } from "react-toastify"
import { handleLogin, handleSignup, handleRegenSession } from "@/services/auth.service";
import { create } from "zustand";

interface UserData {
    name: string | null;
    email: string | null;
}

interface UserState {
    isLoggedin: boolean;
    data: UserData;
}

type Actions = {
    login: (email: string, password: string) => void
    logout: () => void
    signup: (username: string, email: string, password: string, callback: (bool: boolean) => void) => void
    regenSession: () => void
}

const initialState: UserState = {
    isLoggedin: false,
    data: {
        name: null,
        email: null
    },
}

export const userStore = create<UserState & Actions>((set) => ({
    ...initialState,

    login: async (identifyer: string, password: string) => {
        try {
            const result = await handleLogin(identifyer, password);

            if (result.user && result.token) {
                set(() => ({ isLoggedin: true, data: result.user }));
                localStorage.setItem('token', result.token)
                toast.success('Login success')
            }

        } catch (error) {
            toast.warning('Login error, try again')
            console.error("Error occurred:", error);
        }
    },
    signup: async (username: string, email: string, password: string, callback: (bool: boolean) => void) => {
        try {
            const result = await handleSignup(username, email, password);
            if (result.status === 200) {
                callback(true)
                toast.success('Signup successfully, go to login')
            } else {
                callback(false)
                toast.error('Error during signup, try again')
            }

        } catch (error) {
            toast.success('Signup error, try again')
            console.error("Error occurred:", error);
        }
    },

    logout: async () => {
        set(() => (initialState));
        localStorage.removeItem('token')
    },

    regenSession: async () => {
        const userToken = localStorage.getItem('token');
        if (!userToken) {
            set(() => (initialState));
            return
        }

        try {
            const user = await handleRegenSession();
            if (user.status === 200 && user.email) {

                set(() => ({
                    isLoggedin: true,
                    data: { name: user.name, email: user.email }
                }));
            } else {
                localStorage.removeItem('token')
                set(() => (initialState));
            }
            return { user: user.user }
        } catch (error) {
            localStorage.removeItem('token')
        }
    }
}));
