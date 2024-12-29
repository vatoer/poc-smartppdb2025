import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import MenuItems from "./menu-items";

export const MenuMobile = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild className="bg-primary border-0">
          <Button variant="outline">
            <Menu className="text-white text-2xl" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-primary/90 text-white flex flex-col gap-4 border-0 shadow-lg"
        >
          <SheetHeader className="">
            <SheetTitle className="text-white text-2xl">Smart PPDB</SheetTitle>
          </SheetHeader>
          <MenuItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};
