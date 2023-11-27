import { toast } from "react-toastify"
import { addFavorite, removeFavorite } from "@/helpers/favoritesApi"
import { getAll } from "@/helpers/asteroidsApi";

export async function handleFetchAsteroids(set: (any: any) => void, get: () => any) {
    try {
        const result = await getAll();
        const favorites = get().userFavorites;

        if (result.length > 0) {
            if (favorites.length > 0) {
                const newAsteroids = result.map((el: any) => {
                    const isFavorite = favorites.some((fav: any) => fav.id === el.id);
                    return {
                        ...el,
                        favorite: isFavorite,
                    };
                });

                set({ asteroids: newAsteroids });
            } else {
                set({ asteroids: result });
            }
        }
    } catch (error) {
        toast.warning('Fetching asteroids error, try again');
        console.error("Error occurred:", error);
    }
}

export async function handleAddFavorite(id: number, set: (any: any) => void, get: () => any) {

    const res = await addFavorite(id);
    if (res.exist) {
        toast.info('Asteroid already in favorites');
        return;
    }
    if (res.asteroid_id === id) {
        const updatedAsteroids = get().asteroids.map((el: any) => {
            if (el.id === id) {
                el.favorite = true;
            }
            return el;
        });
        const favorites = get().userFavorites;
        const updatedFavorites = [...favorites, updatedAsteroids.find((el: any) => el.id === id)];

        set({ asteroids: updatedAsteroids, userFavorites: updatedFavorites });
        toast.success('Asteroid added to favorites');
    } else {
        toast.warning('Error adding this asteroid');
    }
}

export async function handleRemoveFavorite(id: number, set: (any: any) => void, get: () => any) {
    const res = await removeFavorite(id);
    if (res.deleted) {
        toast.info('Asteroid removed');

        const favorites = get().userFavorites;
        const updated = favorites.filter((el: any) => el.id !== id);

        const updatedAsteroids = get().asteroids.map((el: any) => {
            if (el.id === id) {
                el.favorite = false;
            }
            return el;
        });

        set({ userFavorites: updated, asteroids: updatedAsteroids });
    } else {
        toast.warning('Something went wrong, try again');
    }
}