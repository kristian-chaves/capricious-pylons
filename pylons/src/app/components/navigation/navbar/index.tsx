import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";


const Navbar = () => {
    return(
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <Logo />
                <ul className="hidden md:flex gap-x-6 text-white">
                    <li>
                        <Link href="/about">
                            <p>About Us</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}