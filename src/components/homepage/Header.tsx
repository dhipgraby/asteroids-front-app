"use client";
import Link from "next/link";
import SolarSystem from "../SolarSystem";

export default function Header() {


  return (
    <div className={"header lg:flex sm:block"}>
      <section className='lg:w-1/2 w-full'>
        <h1 className='text-6xl text-left font-semibold'>

          Welcome to AstroAurora
        </h1>
        <h2 className="mb-4 mt-4">
          <span className="text-main">Your Gateway to Health Innovation!</span>
        </h2>

        <Link
          href={"/signup"}
          className="btn-primary p-5 text-3xl font-semibold">
          Sign up!
        </Link>

      </section>

      <section className='lg:w-1/2 w-full'>
        <SolarSystem />
      </section>

    </div>

  );
}
