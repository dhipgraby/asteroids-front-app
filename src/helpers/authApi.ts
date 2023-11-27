import { getCall, postCall } from "./apiCall";
import { AUTH_API } from "./env_variables";

export async function signupUser(name: string, email: string, password: string) {
    const params = { name, email, password };
    return await postCall(`${AUTH_API}auth/signup`, params);
}

export async function loginUser(email: string, password: string) {
    const params = { email, password };
    return await postCall(`${AUTH_API}auth/login`, params);
}

export async function checkLoggedIn() {
    return await getCall(`${AUTH_API}auth/user`);
}
