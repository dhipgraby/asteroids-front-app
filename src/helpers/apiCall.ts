import { PANDA_API } from "./env_variables";
export const ConversationsUrl = PANDA_API + "/conversations";
export const ChatUrl = PANDA_API + "/ai/chat";
export const ChatUrlTest = PANDA_API + "/ai/test";

export async function postCall(url, params) {
    console.log(url);
    const response = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        console.log("error in postCall", { url: url, params: params });
        return false;
    }
    return response.json();
}

export async function getCall(url, params = null) {

    const response = await fetch(url, {
        method: "GET",
        headers: getHeaders(),
    });

    if (!response.ok) {
        console.log("error in getCall", { url: url, params: params });
        return false;
    }
    return response.json();
}

export async function putCall(url, params) {
    const response = await fetch(url, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        console.log("error in putCall", { url: url, params: params });
        return false;
    }
    return response.json();
}

export async function deleteCall(url, params) {
    const response = await fetch(url, {
        method: "DELETE",
        headers: getHeaders(),
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        console.log("error in deleteCall", { url: url, params: params });
        return false;
    }
    return response.json();
}

export function getHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
}