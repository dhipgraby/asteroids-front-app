"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";
import LoginForm from "@/components/Authentication/LoginForm";

const LoginPage = () => {
    return (
        <div className='m-auto ta-c '>

            <LoginForm />

        </div>
    );
};

export default UseGuard(LoginPage, false);