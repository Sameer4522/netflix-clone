import React, { useCallback, useState, useEffect } from "react";
import NavBarItem from "./NavBarItem";
import { HiChevronDown } from "react-icons/hi";
import { BiSearch, BiBell } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import Image from "next/image";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY >= TOP_OFFSET) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const handleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40 select-none">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500  ${
          showBg ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img src="/images/logo.png" className="h-4 md:h-7" alt="Logo" />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavBarItem label="Home" />
          <NavBarItem label="Serise" />
          <NavBarItem label="Films" />
          <NavBarItem label="New & popular" />
          <NavBarItem label="My list" />
          <NavBarItem label="Browse by languages" />
        </div>

        <div
          onClick={handleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <HiChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiSearch size={25} />
          </div>

          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiBell size={25} />
          </div>

          <div
            onClick={handleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>

            <HiChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
              size={22}
            />

            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
