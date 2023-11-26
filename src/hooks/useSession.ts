import { useEffect } from "react";
import { userStore } from "@/stores/user.store";

export default function useSession() {

    const userState = userStore((state) => state)
    const regenSession = userState.regenSession

    useEffect(() => {
        regenSession()
    }, [])

}