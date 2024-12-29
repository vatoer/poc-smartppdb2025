"use client";
import {
  Book,
  BookA,
  CalendarDays,
  Home,
  Info,
  Milestone,
  Signpost,
  SquareX,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t-gray-300 border-t">
      <div className="flex justify-between flex-row items-center p-4">
        <Link href="/">
          <Home className="text-4xl text-blue-700" />
        </Link>
        <Link href="/">
          <BookA className="text-4xl" />
        </Link>
        <Link href="/">
          <Signpost className="text-4xl" />
        </Link>
        <Link href="/">
          <CalendarDays className="text-4xl" />
        </Link>
        <Link href="/">
          <Info className="text-4xl text-blue-700" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarMenuMobile;
