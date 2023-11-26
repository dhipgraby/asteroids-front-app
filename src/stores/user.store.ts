// import { handleLogin } from "";
import { create } from "zustand";

interface UserData {
    username: string | null;
    email: string | null;
}

interface UserState {
    isLoggedin: boolean;
    data: UserData;
}

type Actions = {
    login: (email: string, password: string) => void
    logout: () => void
}

const initialState: UserState = {
    isLoggedin: false,
    data: {
        username: null,
        email: null
    },
}

export const userStore = create<UserState & Actions>((set) => ({
    ...initialState,
    login: async (email: string, password: string) => {
        try {
            console.log("login:", email);
            // const result = await handleLogin(did);
            set(() => ({ isLoggedin: true }));
            return true;
        } catch (error) {
            console.error("Error occurred:", error);
        }
    },
    logout: async () => {
        set(() => ({ isLoggedin: false }));
    }
}));
