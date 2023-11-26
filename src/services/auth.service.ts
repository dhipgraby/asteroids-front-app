import { loginUser, signupUser } from '../helpers/authApi';

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
        console.log('Account created successfully:', data);
        return data
    } else {
        console.log("data", data);
        if (data.message) throw Error(data.message)
        throw Error("error creating account")
    }
};