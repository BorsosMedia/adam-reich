"use client";

import Image from "next/image";
import { Links } from "../Links/Links";
import logo from "../../../../public/logo.png";
import { Hamburger } from "../Hamburger/Hamburger";

export function Navbar() {
  return (
    <header className="bg-[#000]/[0.6] py-half fixed md:absolute top-0 left-0 w-full text-white z-20 md:z-0">
      <nav>
        <ul className="hidden md:flex flex-row items-center justify-evenly">
          <Image
            src={logo}
            alt="RNVNTU Coaching LLC Logo"
            className="w-[5em] h-auto"
          />
          <Links />
        </ul>
        <div className="grid grid-cols-3 md:hidden w-full h-full">
          <Image
            src={logo}
            alt="logo"
            className="w-[5em] h-auto col-start-2 place-self-center"
          />
          <ul className="justify-self-end self-center">
            <Hamburger />
          </ul>
        </div>
      </nav>
    </header>
  );
}
