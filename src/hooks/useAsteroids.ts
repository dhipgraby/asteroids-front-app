import { useEffect } from "react"
import { asteroidsStore } from "@/stores/asteroids.store";

const useAsteroids = () => {

    const useStore = asteroidsStore((state) => state)
    useEffect(() => {
        useStore.fetchAsteroids()
        useStore.fetchUserAsteroids()
    }, [])
}

export default useAsteroids;