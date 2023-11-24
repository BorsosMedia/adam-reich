import Image from "next/image";
import { Links } from "../Links/Links";
import logo from "../../../../public/logo.png";
import { Hamburger } from "../Hamburger/Hamburger";

export function Navbar() {
  return (
    <header className="bg-[#000]/[0.6] py-half fixed md:absolute top-0 left-0 w-full text-white z-20 md:z-0 px-[10vw]">
      <nav>
        <ul className="hidden md:flex flex-row items-center justify-evenly">
          <Image
            src={logo}
            alt="RNVNTU Coaching LLC Logo"
            className="w-[5em] h-auto"
          />
          <Links />
        </ul>
        <div className="flex justify-between items-center md:hidden w-full h-full">
          <Image
            src={logo}
            alt="RNVNTU Coaching LLC Logo"
            className="w-[5em] h-auto"
          />
          <ul>
            <Hamburger />
          </ul>
        </div>
      </nav>
    </header>
  );
}
