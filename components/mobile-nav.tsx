"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { categoryList } from "@/lib/data";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="xl:hidden cursor-pointer">
        <FiMenu size={30} />
      </SheetTrigger>
      <SheetContent side="left" className="p-8">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile category nav</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile category nav menu
          </SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-y-8">
          {categoryList.map((category) => (
            <li key={category}>
              <Link
                href={`/products/${category}`}
                className="font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                {category} cameras
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
