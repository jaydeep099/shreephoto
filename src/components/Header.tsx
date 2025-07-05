import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import Link from "next/link";
import { useState } from "react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isBordered className="flex flex-row items-center">
      <NavbarBrand className="p-4">
        <p className="font-bold lg:text-2xl md:text-2xl sm:text-xl headerFont">Shree Photo Fashion</p>
      </NavbarBrand>
      <div className="flex justify-end">
        <NavbarContent className="hidden sm:flex gap-4 p-4">
          <NavbarItem>
            <Link
              className="text-gray-300 hover:text-white text-muted-foreground hidden space-x-1 transition-colors sm:flex"
              href="#"
            >
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
