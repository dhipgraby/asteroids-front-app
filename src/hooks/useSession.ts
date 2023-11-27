import { useEffect } from "react";
import { userStore } from "@/stores/user.store";

export default function useSession() {
    const regenSession = userStore((state) => state.regenSession)
    useEffect(() => {
        regenSession()
    }, [])

}