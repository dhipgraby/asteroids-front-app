"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";
import AsteroidsTable from "@/components/asteroids/AsteroidsTable";
import { userStore } from "@/stores/user.store";

const DashboardPage = () => {

    const username = userStore((state) => state.data.name)

    return (
        <div className='mx-auto p-4 ta-c'>

            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <p className="text-gray-300">Welcome back {username}</p>
            <div className='flex flex-col md:flex-row gap-4 justify-center pt-10'>
                <div className='flex-1 p-4 rounded w-full p-6'>
                    <AsteroidsTable />
                </div>
            </div>
        </div>
    );
};

export default UseGuard(DashboardPage, true);