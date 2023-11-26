import { toast } from "react-toastify";

async function handleResponse(response: any, url: string, params: any) {
    if (!response.ok) {
        console.log('response', response);

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            if (errorData.message && Array.isArray(errorData.message)) {
                const errorMessage = errorData.message.join(', ');
                toast.error(errorMessage);
                return { error: errorMessage };
            }
        }

        console.log(`Error in ${url}`, { url, params });
        toast.error('An error occurred. Please try again.');
        return false;
    }
    return response.json();
}

export async function postCall(url: string, params: any) {
    const response = await fetch(url, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(params),
    });

    return handleResponse(response, url, params);
}

export async function getCall(url: string, params = null) {
    const response = await fetch(url, {
        method: "GET",
        headers: getHeaders(),
    });

    return handleResponse(response, url, params);
}

export async function putCall(url: string, params: any) {
    const response = await fetch(url, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(params),
    });

    return handleResponse(response, url, params);
}

export async function deleteCall(url: string, params: any) {
    const response = await fetch(url, {
        method: "DELETE",
        headers: getHeaders(),
        body: JSON.stringify(params),
    });

    return handleResponse(response, url, params);
}

export function getHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    };
}
