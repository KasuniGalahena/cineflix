import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ubuntu } from '../../public/fonts/fonts';
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    // const chageBachground = () => {
    //     if (window.screenY >= 80) {
    //         setNavbar(true);
    //     }
    //     else {
    //         setNavbar(false);
    //     }
    // };

    // window.addEventListener('scroll', chageBachground);
    return (
        <nav className='absolute z-10 hover:shadow-md w-full top-0 left-0'>
            <div className={navbar ? 'active' : 'transparent'}>
                <div className='md:flex items-center justify-between py-2 md:px-10 px-7'>
                    <div>
                        <Link href={'/'}>
                        <Image src="/images/logo.png" alt='logo' width={130} height={100} className='drop-shadow-lg' />
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
                        <FaBars className="fa-solid fa-bars text-primary" name={open ? 'close' : 'menu'}/>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:sticky md:z-auto z-[1] left-0 w-full 
                    md:w-auto md:bg-transparent bg-dark md:px-0 px-9 transition-all duration-500 ease-in ${open ? 'top-12 ' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 md:mt-0 mt-10'>
                            <div className="relative md:w-60 w-full">
                                <input type="search" id="searchbar" className={`bg-transparent text-sm rounded-full border border-primary 
                                focus:border-primary text-primary p-3 w-full ${ubuntu.className}`} placeholder="Quick search" />
                                <button type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium text-primary">
                                    <svg className="w-4 h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-10'>
                            <Link href="/" className={`text-primary text-lg hover:text-secondary duration-500 ${ubuntu.className}`}>Home</Link>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-3'>
                            <Link href="/trending-movies" className={`text-primary text-lg hover:text-secondary duration-500 ${ubuntu.className}`}>Trending</Link>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-3'>
                            <Link href="/browse-movies" className={`text-primary text-lg hover:text-secondary duration-500 ${ubuntu.className}`}>Browse Movies</Link>
                        </li>
                        <li className='md:ml-8 md:mt-0 mt-3'>
                            <div className="inline-flex rounded-md shadow-sm">
                                <Link href="/login" aria-current="page" className={`bg-transparent text-secondary 
                                text-lg border border-secondary rounded-s-lg hover:bg-transparent/40 place-self-center shadow-lg py-1 px-6 ${ubuntu.className}`}>
                                    Login
                                </Link>
                                <Link href="/register" className={`bg-transparent text-primary 
                                text-lg border border-primary rounded-e-lg hover:bg-transparent/40 place-self-center shadow-lg py-1 px-6 ${ubuntu.className}`}>
                                    Register
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}