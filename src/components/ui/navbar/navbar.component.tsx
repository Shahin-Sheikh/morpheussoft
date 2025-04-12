"use client";

import Link from "next/link";
import { useState } from "react";
import { navbarData } from "./navbar-items";
import Image from "next/image";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const toggleDropdown = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-[#FFFFFF] p-8 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-left">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="https://49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io/f1733171248210x470847139026376450/Bubble_Light.svg"
            alt="Bubble.io Logo"
            width={50}
            height={20}
            className="h-5 w-auto"
            priority
          />
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#1A1A1A] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#FFFFFF] md:bg-transparent p-4 md:p-0 ml-24`}
        >
          {navbarData.navbarItems.map((item, index) => {
            const isLogin = item.category === "Log in";

            const isDropdownOpen = openDropdown === index;

            return (
              <li key={item.category} className="relative">
                <div className="flex items-center">
                  <Link
                    href={item.url}
                    className={`${
                      isLogin
                        ? `ml-90 text-[#0205D3] text-base font-bold hover:underline}`
                        : "text-[#1A1A1A] text-base font-bold hover:underline"
                    } block py-2 md:py-0 transition-colors`}
                    aria-haspopup={item.subcategories.length > 0}
                    onClick={(e) => {
                      if (item.subcategories.length > 0) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.category}
                  </Link>
                  {item.subcategories.length > 0 && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="ml-1 text-[#1A1A1A] focus:outline-none"
                      aria-label={`Toggle ${item.category} submenu`}
                    >
                      {isDropdownOpen ? (
                        <MdOutlineExpandMore
                          size={20}
                          className="rotate-180 transition-transform cursor-pointer"
                        />
                      ) : (
                        <MdOutlineExpandMore
                          size={20}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  )}
                </div>
                {/* Submenu */}
                {item.subcategories.length > 0 && (
                  <ul
                    className={`${
                      isDropdownOpen ? "flex" : "hidden"
                    } flex-col absolute top-full left-0 bg-white w-64 mt-2 rounded-md shadow-lg border border-gray-100 p-4`}
                    aria-label={`Submenu for ${item.category}`}
                  >
                    {item.subcategories.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.url}
                          className="flex flex-col px-4 py-3 hover:bg-gray-100 rounded-md transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <span className="font-medium text-[#1A1A1A]">
                            {sub.name}
                          </span>
                          <span className="text-sm text-gray-600">
                            {sub.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
