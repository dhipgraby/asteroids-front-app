import { deleteCall, getCall, postCall } from "./apiCall";
import { USER_API } from "./env_variables";

export async function addFavorite(id: number) {
    return await postCall(`${USER_API}favorites/add`, { id });
}

export async function removeFavorite(id: number) {
    return await deleteCall(`${USER_API}favorites`, { id });
}

export async function getAll() {
    return await getCall(`${USER_API}favorites`);
}
