"use client";
import React from "react";
import UseGuard from "@/hoc/UseGuard";
import SignupForm from "@/components/Authentication/SignupForm";

const SignupPage = () => {
    return (
        <div className='m-auto ta-c '>
            <SignupForm />
        </div>
    );
};

export default UseGuard(SignupPage, false);