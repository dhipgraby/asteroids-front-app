import { useState } from 'react';
import { asteroidsStore } from '@/stores/asteroids.store';
import { Asteroid } from '@/dto/asteroids.dto';
import usePagination from '@/hooks/usePagination';

const PAGE_SIZE = 8;

export default function useTable(AsteroidType: string) {

    const [isLoading, setIsLoading] = useState(false)
    const [selectedAsteroid, setSelectedAsteroid] = useState<Asteroid | undefined>()
    const asteroidsState = asteroidsStore((state) => state)
    const asteroids = asteroidsState.asteroids
    const addToFavorites = asteroidsState.addToFavorites
    const removeFavorite = asteroidsState.removeFavorite
    const userFavorites = asteroidsState.userFavorites

    const asteroidToRender = (AsteroidType == 'user') ? userFavorites : asteroids

    const {
        selectedAsteroids,
        setCurrentPage,
        currentPage,
        totalPages
    } = usePagination(asteroidToRender, PAGE_SIZE)

    function toggleFavorite(id: number, isFavorite: boolean) {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        if (AsteroidType === 'user' && isFavorite) setSelectedAsteroid(undefined)

        return isFavorite ? removeFavorite(id) : addToFavorites(id)
    }

    return {
        isLoading,
        toggleFavorite,
        asteroids,
        userFavorites,
        selectedAsteroid,
        setSelectedAsteroid,
        selectedAsteroids,
        setCurrentPage,
        currentPage,
        totalPages
    }
}