import { toast } from "react-toastify"
import { handleLogin, handleSignup } from "@/services/auth.service";
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
    login: async (email: string, password: string) => {
        try {
            console.log("login:", email);
            const result = await handleLogin(email, password);

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
            console.log("signup:", email);
            const result = await handleSignup(username, email, password);
            console.log("signup result:", result);
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
    }
}));
