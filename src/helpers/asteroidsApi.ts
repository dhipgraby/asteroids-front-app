import { getCall } from "./apiCall";
import { ASTEROID_API } from "./env_variables";

export async function getAllByDate() {
    return await getCall(`${ASTEROID_API}asteroids/feed?start_date=`);
}

export async function getAll() {
    return await getCall(`${ASTEROID_API}asteroids/all`);
}
