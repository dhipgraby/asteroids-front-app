"use client";
import React, { useEffect, useState } from "react";
import UseGuard from "@/hoc/UseGuard";
import { getAll } from "@/helpers/asteroidsApi";
import { getAll as getAllFavorites } from "@/helpers/favoritesApi";
import AsteroidsTable from "@/components/asteroids/AsteroidsTable";
import FavoritesTable from "@/components/asteroids/FavoritesTable";

interface Asteroid {
    id: number;
    name: string;
    diameter: string;
    discovered: string;
    comment: string;
}


const DashboardPage = () => {
    const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
    const [favorites, setFavorites ] = useState<Asteroid[]>([]);

    useEffect(() => {
        async function getAsteroids() {
            const result = await getAll()
            console.log('asteroids result', result);
            setAsteroids(result);
        }
        getAsteroids()
    },[setAsteroids])

    useEffect(() => {
        async function getFavorites() {
         const result = await getAllFavorites()
          console.log('favorites result', result);
          setFavorites(result);
        }
        getFavorites()
    },[setFavorites])

    return (
        <div className='mx-auto max-w-4xl p-4'>
        <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          <div className='flex-1 p-4 rounded max-w-fit p-6'>
            <AsteroidsTable asteroids={ asteroids }/>
          </div>
          <div className='flex-1 p-4 rounded'>
            <FavoritesTable 
              favorites={ favorites }
            /> 
          </div>
        </div>
      </div>
    );
};

export default DashboardPage;