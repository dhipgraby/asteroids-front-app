// app/pages/LandingPage.tsx
"use client";
import React from "react";
import Header from "../components/homepage/Header";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className='mx-auto'>

      <Header />

      {/* <div className="w-1/4 mx-auto pb-10">
        <Link className="w-full" href="/dashboard">
          <button className="btn-primary text-2xl w-full font-semibold">
            Get Started!
          </button>
        </Link>
      </div> */}

    </div>
  );
};

export default LandingPage;
