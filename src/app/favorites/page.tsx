"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import AsteroidsTable from "@/components/asteroids/AsteroidsTable";

const DashboardPage = () => {

    return (
        <div className='mx-auto p-4 ta-c' >
            <h1 className='text-2xl font-bold mb-4'>Favorites Asteroids <FontAwesomeIcon className="text-red-400" icon={faHeart} /> </h1>
            <div className='flex flex-col md:flex-row gap-4 justify-center pt-10'>
                <div className='flex-1 p-4 rounded w-full p-6'>
                    <AsteroidsTable AsteroidType={'user'} />
                </div>
            </div>
        </div>
    );
};

export default UseGuard(DashboardPage, true);