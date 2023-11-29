'use client'
import { useEffect } from "react";
import { userStore } from "@/stores/user.store";
import { asteroidsStore } from "@/stores/asteroids.store";

export default function useSession() {
    const userState = userStore((state) => state)
    const asteroidsState = asteroidsStore((state) => state)

    const isLoggedin = userState.isLoggedin

    async function loadUserData() {
        console.log('fetching asteroids');
        await asteroidsState.fetchUserAsteroids()
        await asteroidsState.fetchAsteroids()
    }

    useEffect(() => {
        userState.regenSession()
        console.log('restoring session', isLoggedin);
        if (isLoggedin) loadUserData()
    }, [isLoggedin])

}