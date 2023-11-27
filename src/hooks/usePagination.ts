import { useState } from "react"
import { Asteroid } from "@/dto/asteroids.dto";

export default function usePagination(asteroids: Asteroid[], PAGE_SIZE: number) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(asteroids.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const selectedAsteroids = asteroids.slice(startIndex, startIndex + PAGE_SIZE);

    return {
        selectedAsteroids,
        setCurrentPage,
        totalPages,
        currentPage
    }

}