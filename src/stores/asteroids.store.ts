import { toast } from "react-toastify"
import { getAll } from "@/helpers/asteroidsApi";
import { getAll as getFavorites, addFavorite } from "@/helpers/favoritesApi";
import { create } from "zustand";
import { Asteroid } from "@/dto/asteroids.dto";

interface AsteroidsState {
    asteroids: Asteroid[]
    userFavorites: any[]
}

type Actions = {
    fetchAsteroids: () => void,
    fetchUserAsteroids: () => void
    addToFavorites: (id: number) => void
}

const initialState: AsteroidsState = {
    asteroids: [],
    userFavorites: []
}

export const asteroidsStore = create<AsteroidsState & Actions>((set, get) => ({
    ...initialState,
    fetchAsteroids: async () => {
        try {
            const result = await getAll()
            if (result.length > 0) set({ asteroids: result })
        } catch (error) {
            toast.warning('Fetching asteroids error, try again')
            console.error("Error occurred:", error);
        }
    },
    fetchUserAsteroids: async () => {
        const ast = get().asteroids
        console.log("asteroids from favorites", ast);
        return
        const result = await getFavorites()
    },
    addToFavorites: async (id: number) => {
        const res = await addFavorite(id);
        if (res.exist) {
            toast.info('Asteroid already in favorites')
            return
        }
        console.log("res", res);
        console.log("current id", id);

        if (res.asteroid_id === id) {
            toast.success('Asteroid added to favorites')
        } else {
            toast.warning('Error adding this asteroid')
        }
    },
}));
