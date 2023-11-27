import { useEffect } from "react"
import { asteroidsStore } from "@/stores/asteroids.store";

const useAsteroids = () => {

    const fetchAsteroids = asteroidsStore((state) => state.fetchAsteroids)
    useEffect(() => {
        fetchAsteroids()
    }, [])
}

export default useAsteroids;