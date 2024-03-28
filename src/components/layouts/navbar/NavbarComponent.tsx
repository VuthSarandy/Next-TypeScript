"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navbar } from "./menu";

export default function NavbarComponent() {
  const pathname = usePathname();
  if (pathname.includes("/dashboard")) return null;
  else
    return (
      <Navbar className="p-2 bg-amber-600">
        <NavbarBrand>
          <Image width={40} className="mr-4 rounded-full" height={40} src={""} alt={""} />
          <p className="font-bold text-gray-900">Sarandy</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">

          {
            navbar.map((item,index)=>(
              <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.href}
              className={`${pathname === item.href && "font-bold text-gray-100"}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
            ))
          }
      
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="text-amber-500 bg-black" href="/dashboard" variant="flat">
              Dashboard
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}
