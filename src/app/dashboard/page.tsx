"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";
import AsteroidsTable from "@/components/asteroids/AsteroidsTable";
import useAsteroids from "@/hooks/useAsteroids";


const DashboardPage = () => {

    useAsteroids()

    return (
        <div className='mx-auto p-4 ta-c' >
            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <div className='flex-1 p-4 rounded max-w-fit p-6'>
                    <AsteroidsTable />
                </div>
            </div>
        </div>
    );
};

export default UseGuard(DashboardPage, true);