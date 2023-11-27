"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faHeart, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import LogoUri from "../../public/assets/images/logo.png";
import { userStore } from "@/stores/user.store";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const isLoggedIn = userStore((state) => state.isLoggedin)
    const logout = userStore((state) => state.logout)

    return (
        <div className="sticky top-5">
            <nav className='navbar rounded-full z-10 flex shadow-lg items-center min-w-screen p-1'>

                <ul className='desktopMenu rounded-full w-full h-8 gap-4 lg items-center sm:flex text-black'>
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
                </ul>
                <ul className='desktopMenu rounded-full w-full h-8 gap-4 lg items-center justify-end sm:flex text-black'>
                    {!isLoggedIn ? (
                        <><li className='flex gap-4 items-center'>
                            <Link href="/login" className="btn-primary">Login</Link>
                        </li>
                            <li className='flex gap-4 items-center'>
                                <Link href="/signup" className="btn-primary">Signup</Link>
                            </li>
                        </>
                    ) :
                        <>
                           
                            <li className='flex gap-4 items-center'>
                                <Link href="/dashboard" className="btn-primary">Explore</Link>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <Link href="/favorites" className="btn-primary"> Favorites <FontAwesomeIcon icon={faHeart} className="text-red-400" /></Link>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <button className="mx-5" onClick={() => logout()}> <FontAwesomeIcon icon={faPowerOff} className="text-red-400 hover:text-gray-100" /></button>
                            </li>
                        </>
                    }
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
            {!isLoggedIn ? (
                <>
                    <ul className={`${showMenu ? "" : "hideMenu"} drowdown mobileMenu sticky z-10 flex-col`}>
                        <li>
                            <Link onClick={() => setShowMenu(false)} href="/login" className="px-2">Login</Link>
                        </li>
                        <li>
                            <Link onClick={() => setShowMenu(false)} href="/signup" className="px-2">Signup</Link>
                        </li>
                    </ul>
                </>
            ) :
                <>
                    <ul className={`${showMenu ? "" : "hideMenu"} drowdown mobileMenu sticky z-10 flex-col`}>
                        <li className='flex gap-4 items-center'>
                            <Link href="/signup" className="my-2 text-red-300"> Favorites <FontAwesomeIcon icon={faHeart} /></Link>
                        </li>
                        <li className='flex gap-4 items-center'>
                            <Link href="/dashboard" className="my-2 ">Dashboard</Link>
                        </li>
                    </ul>
                </>
            }
        </div>
    );
}