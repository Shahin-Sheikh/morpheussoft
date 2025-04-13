"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { navbarData, type NavbarItem, type Subcategory } from "./navbar-items";
import Image from "next/image";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const renderColumnSubcategories = (
    subcategories: Subcategory[],
    isMobile: boolean
  ) => {
    const columns: Subcategory[][] = [[], [], []];
    const itemsPerColumn = Math.ceil(subcategories.length / 3);

    subcategories.forEach((sub, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      if (columnIndex < 3) {
        columns[columnIndex].push(sub);
      }
    });

    return (
      <div className={`flex ${isMobile ? "flex-col" : ""} w-full`}>
        {columns.map(
          (column, colIndex) =>
            column.length > 0 && (
              <div
                key={colIndex}
                className={`space-y-4 ${
                  !isMobile && colIndex < columns.length - 1
                    ? "pr-8 border-r border-gray-200"
                    : ""
                } ${!isMobile ? "px-4" : ""}`}
              >
                {column.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.url}
                    className="block group"
                    onClick={() => {
                      setIsOpen(false);
                      setOpenDropdown(null);
                    }}
                  >
                    <h3 className="font-semibold text-[#1A1A1A] group-hover:text-blue-600 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {sub.description}
                    </p>
                  </Link>
                ))}
              </div>
            )
        )}
      </div>
    );
  };

  const renderNavItem = (item: NavbarItem, id: string, isMobile = false) => {
    const isLogin = item.category === "Log in";
    const isDropdownOpen = openDropdown === id;

    return (
      <li key={item.category} className="relative list-none">
        <div className="flex items-center">
          <Link
            href={item.url}
            className={`${
              isLogin
                ? "text-[#0205D3] font-bold hover:underline"
                : "text-[#1A1A1A] font-bold hover:underline"
            } text-base py-2 md:py-0 transition-colors`}
            onClick={(e) => {
              if (item.subcategories.length > 0) {
                e.preventDefault();
                toggleDropdown(id);
              } else {
                setIsOpen(false);
              }
            }}
          >
            {item.category}
          </Link>
          {item.subcategories.length > 0 && (
            <button
              onClick={() => toggleDropdown(id)}
              className="ml-1 focus:outline-none"
              aria-label={`Toggle ${item.category} submenu`}
            >
              <MdOutlineExpandMore
                size={20}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
        {item.subcategories.length > 0 && isDropdownOpen && (
          <div
            className={`${isMobile ? "bg-gray-50" : "bg-white"} absolute ${
              isMobile
                ? "w-full"
                : "min-w-[600px] left-1/2 transform -translate-x-1/2"
            } mt-2 rounded-md shadow-lg border border-gray-100 p-6`}
          >
            {renderColumnSubcategories(item.subcategories, isMobile)}

            {!isMobile && item.category === "Services" && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">
                      Platform overview
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Explore the power of our platform
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">
                      AI Features
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Elevate your experience with AI
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </li>
    );
  };

  return (
    <nav
      className="bg-white p-8 fixed top-0 left-0 w-full z-50 shadow-sm"
      ref={navbarRef}
    >
      <div className="max-w-7xl mx-auto flex justify-evenly items-center">
        {/* Left section - Logo + left items */}
        <div className="flex items-center gap-12">
          <Link href="/" onClick={() => setOpenDropdown(null)}>
            <Image
              src="https://49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io/f1733171248210x470847139026376450/Bubble_Light.svg"
              alt="Bubble.io Logo"
              width={50}
              height={20}
              className="h-5 w-auto"
              priority
            />
          </Link>

          {/* Desktop left items */}
          <ul className="hidden md:flex items-center gap-6">
            {navbarData.leftItems.map((item, index) =>
              renderNavItem(item, `left-${index}`)
            )}
          </ul>
        </div>

        {/* Desktop right items */}
        <ul className="hidden md:flex items-center gap-6">
          {navbarData.rightItems.map((item, index) =>
            renderNavItem(item, `right-${index}`)
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1A1A1A]"
          onClick={() => {
            setIsOpen(!isOpen);
            setOpenDropdown(null);
          }}
          aria-label="Toggle navigation"
        >
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-4 p-4 space-y-4">
          {[
            ...navbarData.leftItems.map((item, index) => ({
              ...item,
              id: `mobile-left-${index}`,
            })),
            ...navbarData.rightItems.map((item, index) => ({
              ...item,
              id: `mobile-right-${index}`,
            })),
          ].map((item) => renderNavItem(item, item.id, true))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
