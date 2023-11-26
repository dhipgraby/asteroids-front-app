"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";

const LoginPage = () => {
    return (
        <div className='mx-auto'>
            <h1>Login</h1>
        </div>
    );
};

export default UseGuard(LoginPage, false);