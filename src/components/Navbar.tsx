import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const [state, setstate] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4 z-10 w-full absolute">
        <div className="flex gap-12 items-center">
          <div className="flex gap-2">
            <div className=" flex items-center lg:hidden text-black dark:text-white">
              <button
                type="button"
                className=" ml-7 "
                onClick={() => setstate(!state)}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <IoMdMenu size={30} />
              </button>
            </div>
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
              NETFLIX
            </h1>
          </div>
          <div className="hidden lg:block">
            <div className="flex space-x-4 ">
              <span className="text-white cursor-pointer hover:opacity-50">
                Home
              </span>
              <span className="text-white cursor-pointer hover:opacity-50">
                Movies
              </span>
              <span className="text-white cursor-pointer hover:opacity-50">
                Tv Shows
              </span>
              <span className="text-white cursor-pointer hover:opacity-50">
                New & popular
              </span>
              <span className="text-white cursor-pointer hover:opacity-50">
                My List
              </span>
              <span className="text-white cursor-pointer hover:opacity-50">
                Browse By Languages
              </span>
            </div>
          </div>
        </div>
        <div>
          <button className="text-white pr-4">Sign In</button>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </div>
      </div>
      {state && (
        <div
          className="lg:hidden transition duration-500 ease-linear z-20 absolute top-16 bg-black rounded-md"
          id="mobile-menu"
        >
          <div className="space-y-1 text-center ">
            <a
              href="/"
              className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <a
              href="/"
              className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Movies
            </a>

            <a
              href="/"
              className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Tv Shows
            </a>

            <a
              href="/"
              className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              New & popular
            </a>
            <a
              href="/"
              className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              My List
            </a>
            <a
              href="/"
              className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Browse By Languages
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
