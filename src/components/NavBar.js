import React, { useState } from "react";

export default function NavBar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav id="navbar" className="border border-double border-gray-400 rounded bg-white flex flex-wrap px-4 py-5 w-full fixed z-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between relative">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#Home" className="font-serif sm:text-lg md:text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-red-700 hover:text-black">
              Some Company
            </a>
            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")} id="navbar-warning">

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="nav-item">
                <a href="#Home" className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black">
                  <span className="ml-2 pb-2 border-b-2 border-red-700">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Service" className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black">
                  <span className="ml-2 pb-2 border-white border-b-2 hover:border-red-700">Service</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="#Portfolio" className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black">
                  <span className="ml-2 pb-2 border-white border-b-2 hover:border-red-700">Portfolio</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="#Our Team" className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black">
                  <span className="ml-2 pb-2 border-white border-b-2 hover:border-red-700">Our Team</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="#Contact Us" className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black">
                  <span className="ml-2 pb-2 border-white border-b-2 hover:border-red-700">Contact Us</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
