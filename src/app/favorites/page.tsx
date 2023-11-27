"use client";
import React, { useEffect, useState } from "react";
import UseGuard from "@/hoc/UseGuard";
import FavoritesTable from "@/components/asteroids/FavoritesTable";
import { getAll } from "@/helpers/favoritesApi";

const FavoritesPage = () => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        async function getFavorites() {
            const result = await getAll()
            setFavorites(result);
        }
        getFavorites()
    }, [setFavorites])


    return (
        <div className='m-auto ta-c '>
            <h1 className='text-2xl font-bold mb-4'>Your Favorites Asteroids</h1>

            <FavoritesTable
                favorites={favorites}
            />
        </div>
    );
};

export default UseGuard(FavoritesPage, true);