"use client";

import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "./menu";
import { MenuMobile } from "./menu-mobile";
import NavbarMenuMobile from "./navbar-menu-mobile";

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null); // Reference to the navbar
  const [isSticky, setIsSticky] = useState(false); // State to track sticky status

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.offsetTop;
        setIsSticky(window.scrollY > navbarTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Section above the navbar */}
      <div
        className="relative bg-gradient-to-r from-blue-900 to-red-900 h-[267px] "
        // style={{ backgroundImage: "url('/banner-small.png')" }}
      >
        <img
          src="/banner-small.png"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover" // Image placed on top of the gradient
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-green-100 bg-opacity-10"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white gap-2">
          <h1 className="md:text-3xl font-bold drop-shadow-lg bg-white text-gray-900 p-4 rounded-md">
            Penerimaan Peserta Didik Baru
          </h1>

          <h1 className="md:text-lg font-bold drop-shadow-lg bg-white text-gray-900 p-2 rounded-md">
            Tahun Pelajaran 2025 / 2026
          </h1>
          <div className="flex flex-col md:flex-row gap-2">
            <Link href="/buat-akun-baru#formulir">
              <Button
                size={"lg"}
                className="md:text-4xl font-bold md:p-6 bg-blue-700"
              >
                Daftar Sekarang
              </Button>
            </Link>
            <Button
              size={"lg"}
              className="md:text-4xl font-bold md:p-6 bg-blue-600"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className={`bg-gray-50 text-gray-900 backdrop-blur h-[48px] w-full z-50 shadow-lg flex flex-row justify-between items-center px-2 ${
          isSticky ? "fixed inset-y-0 z-50 opacity-90" : ""
        }`}
      >
        <div className="flex flex-row gap-2">
          {/* <MenuMobile /> */}
          <div className="flex items-center">
            <Link href="/" className="whitespace-nowrap">
              <span>Smart PPDB</span>
            </Link>
          </div>
          <Menu />
        </div>
        <div id="userbutton" className="rounded-full bg-blue-500 h-8 w-8"></div>
      </nav>
      <NavbarMenuMobile />
    </div>
  );
};
