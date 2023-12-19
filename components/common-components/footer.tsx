"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Logo from "./logo";
import Image from "next/image";

export default function Footer() {

    const menuItems = [
        {
            txt: "ABOUT US",
            url: '/about-us',
            icon: "/footer/about_us.svg",
            showAnchor: false
        },
        {
            txt: "JOIN THE CLUB",
            url: 'http://eepurl.com/iFDbkc',
            icon: "/footer/join_us.svg",
            showAnchor: false
        },
        {
            txt: "FOLLOW US",
            url: 'https://www.instagram.com/breadsbakery/?hl=en',
            icon: "/footer/insta.svg",
            showAnchor: true
        },
        {
            txt: "FIND US",
            url: 'https://maps.app.goo.gl/c1q1VAYEesRkU6Bt5',
            icon: "/footer/location.svg",
            showAnchor: true
        }
    ];

    return (
        <Navbar
            isBordered
            className="bg-warning-500 h-24"
        >

            <NavbarContent justify="start" className="pt-2 text-xl hidden lg:flex">
                <NavbarBrand id="id-footer-logo">
                    <Logo showLogo={false} clsName="font-4xl"/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="flex gap-1 lg:gap-4 justify-end" justify="start">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className="flex flex-col justify-end items-center gap-2 w-full">
                        <Image
                            className='object-cover'
                            src={item.icon}
                            alt="Le Jardin Brand Logo"
                            height={index == 3? 20:  30}
                            width={index == 3? 20:  30}
                        />
                        <Link
                            className="text-[13px] md:text-medium"
                            color="foreground"
                            href={item.url}
                            showAnchorIcon={item.showAnchor}
                            size="sm"
                        >
                            {item.txt}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}