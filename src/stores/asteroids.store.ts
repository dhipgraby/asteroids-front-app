import { toast } from "react-toastify"
import { getAll as getFavorites } from "@/helpers/favoritesApi";
import { create } from "zustand";
import { Asteroid } from "@/dto/asteroids.dto";
import { handleAddFavorite, handleFetchAsteroids, handleRemoveFavorite } from "@/services/asteroid.service";

interface AsteroidsState {
    asteroids: Asteroid[]
    userFavorites: any[]
}

type Actions = {
    fetchAsteroids: () => void,
    fetchUserAsteroids: () => void
    addToFavorites: (id: number) => void
    removeFavorite: (id: number) => void
}

const initialState: AsteroidsState = {
    asteroids: [],
    userFavorites: []
}

export const asteroidsStore = create<AsteroidsState & Actions>((set, get) => ({
    ...initialState,
    fetchAsteroids: async () => {
        await handleFetchAsteroids(set, get)
    },

    fetchUserAsteroids: async () => {
        try {
            const result = await getFavorites()

            if (result.length > 0) set({ userFavorites: result })
        } catch (error) {
            toast.error('Error fetching user asteroids')
            console.log('fetch favorites error:', error);
        }
    },
    addToFavorites: async (id: number) => {
        await handleAddFavorite(id, set, get)
    },

    removeFavorite: async (id: number) => {
        handleRemoveFavorite(id, set, get)
    },
}));
