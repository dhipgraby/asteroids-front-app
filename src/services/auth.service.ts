import { loginUser, signupUser, checkLoggedIn } from '../helpers/authApi';

export const handleLogin = async (email: string, password: string) => {
    const data = await loginUser(email, password)

    if (data.user && data.token) {
        return {
            user: data.user,
            token: data.token
        }
    } else {
        return { error: data.message }
    }
};

export const handleSignup = async (username: string, email: string, password: string) => {
    const data = await signupUser(username, email, password);
    if (data.status == 200) {
        return data
    } else {
        if (data.message) throw Error(data.message)
        throw Error("error creating account")
    }
};

export const handleRegenSession = async () => {
    const data = await checkLoggedIn();
    if (data.status === 200 && data.email) {
        return data
    } else {
        if (data.message) throw Error(data.message)
        throw Error("error regerating session account")
    }
};