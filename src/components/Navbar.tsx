import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const styleONe =
    "transition duration-300 ease-in-out transform hover:scale-110";
  const styleTwo =
    "border-b-2 border-zinc-300 transition duration-300 ease-in-out transform hover:-translate-y-1";
  return (
    <div className="w-screen h-[3rem] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">BRAND.</h1>
          <ul className="hidden md:flex ">
            <li className={styleONe}>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className={styleONe}>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className={styleONe}>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li className={styleONe}>
              <Link to="platfforms" smooth={true} offset={-100} duration={500}>
                Platfforms
              </Link>
            </li>
            <li className={styleONe}>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <button className="border-none bg-transparent text-black mr-4">
            Sign in
          </button>
          <button className="px-5 py-2">Sign up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav
            ? <Bars3BottomRightIcon className="w-8 cursor-pointer" />
            : <XMarkIcon className="w-8 cursor-pointer" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute md:hidden bg-zinc-200 w-full px-8 "
        }
      >
        <li className={styleTwo}>
          <Link to="home" smooth={true} duration={500} onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className={styleTwo}>
          <Link
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
            onClick={handleClose}
          >
            About
          </Link>
        </li>
        <li className={styleTwo}>
          <Link
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleClose}
          >
            Support
          </Link>
        </li>
        <li className={styleTwo}>
          <Link
            to="platfforms"
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleClose}
          >
            Platfforms
          </Link>
        </li>
        <li className={styleTwo}>
          <Link
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleClose}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign in
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
