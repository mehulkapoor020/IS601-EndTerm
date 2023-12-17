"use client"
import React, { useState } from "react";
import { NavbarMenuToggle, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Logo from "./logo";
import { useAnalyticsEventTracker } from "../../lib/gtagHelper";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      txt: "About",
      url: '/about_us',
      showAnchor: false,
      track: () => useAnalyticsEventTracker("about-us", "Navigated to About Us page", "about-us")
    },
    {
      txt: "Reviews",
      url: '/#reviews',
      showAnchor: false,
      track: () => useAnalyticsEventTracker("landing-page", "Navigated to Testimonials section", "landing-page")
    },
    {
      txt: "Menu",
      url: '/#menu',
      showAnchor: false,
      track: () => useAnalyticsEventTracker("landing-page", "Navigated to Menu section", "landing-page")
    }
  ];

  const [activeSection, setActiveSection] = useState(-1);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-warning-500"
    >

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarContent justify="start" className="pt-2">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={index == activeSection ? true : false}>
            <Link
              color="foreground"
              href={item.url}
              showAnchorIcon={item.showAnchor}
              onPress={
                () => {
                  setActiveSection(index)
                  item.track()
                }
              }
            >
              {item.txt}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color="foreground"
              href={item.url}
              showAnchorIcon={item.showAnchor}
              onPress={() => {
                setActiveSection(index)
                item.track()
              }}
              size="lg"
            >
              {item.txt}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            disableRipple={false}
            className="font-bold bg-black text-white"
            size="md"
            color="default"
            as={Link}
            onClick={
              () => useAnalyticsEventTracker(
                'landing-page', "Sign Up Initiated", "landing-page"
              )
            }
            href="http://eepurl.com/iFDbkc"
            variant="solid"
          >
            BAKER'S CLUB
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}