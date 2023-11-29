import { useEffect } from "react"
import { asteroidsStore } from "@/stores/asteroids.store";
import { userStore } from "@/stores/user.store";

const useAsteroids = () => {

    const isLoggedin = userStore((state) => state.isLoggedin)

    const useStore = asteroidsStore((state) => state)

    useEffect(() => {
        if (isLoggedin) {
            useStore.fetchAsteroids()
            useStore.fetchUserAsteroids()
        }
    }, [isLoggedin])
}

export default useAsteroids;