"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";

const DashboardPage = () => {
    return (
        <div className='mx-auto'>
            <h1>Dashboard</h1>

        </div>
    );
};

export default UseGuard(DashboardPage, true);