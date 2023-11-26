"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import LogoUri from "../../public/assets/images/logo.png";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="sticky top-5">
            <nav className='navbar rounded-full z-10 flex shadow-lg items-center min-w-screen p-1'>

                <ul className='desktopMenu rounded-full w-full h-8 gap-4 lg items-center  justify-between sm:flex text-black'>
                    <li className='flex gap-4 items-center'>
                        <Link href="/">
                            <span className='items-center flex gap-2 flex'>
                                <span className="logo">
                                    <Image alt={"logo"} width={35} height={35} src={LogoUri} priority />
                                </span>
                                <span className="hidden title md:flex">
                                    Astro <span className="text-purple ml-1">Aurora</span>
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Link href="/login" className="btn-primary">Login</Link>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Link href="/signup" className="btn-primary">Signup</Link>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Link href="/dashboard" className="btn-primary">Dashboard</Link>
                    </li>
                </ul>

                <ul className='mobileMenu flex w-full items-center justify-between'>
                    <li onClick={() => setShowMenu(prev => !prev)} className='w-1/4 pt-1 ml-3 cursor-pointer'>
                        <span className="menu text-grey">
                            <FontAwesomeIcon icon={(showMenu) ? faClose : faBars} />
                        </span>
                    </li>
                    <li className='w-1/4 pt-1 ta-r'>
                        <Link href={"/"}>
                            <span className="logo ta-r">
                                <Image alt={"logo"} width={50} height={50} src={LogoUri} priority />
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Conditionally render dropdown based on showMenu state */}
            <ul className={`${showMenu ? "" : "hideMenu"} drowdown mobileMenu sticky z-10 flex-col`}>
                <li>
                    <Link onClick={() => setShowMenu(false)} href="/login" className="px-2">Access</Link>
                </li>
            </ul>
        </div>
    );
}