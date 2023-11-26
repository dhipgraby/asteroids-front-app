// import { handleLogin } from "";
import { create } from "zustand";

const initialState = {
    isLoggedin: false,
    data: {
        username: null,
        email: null
    },
}

export const userStore = create((set) => ({
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
    }
}));
