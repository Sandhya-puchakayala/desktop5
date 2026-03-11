"use client";

import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "DOGS", hasDropdown: true },
  { label: "CATS", hasDropdown: true },
  { label: "BIRDS", hasDropdown: true },
  { label: "FISHES", hasDropdown: true },
  { label: "SERVICES", hasDropdown: false },
  { label: "PAWSCRIPTION", hasDropdown: false },
  { label: "PAWSSURANCE", hasDropdown: false },
  { label: "PETFLUENCER", hasDropdown: false },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      {/* Top Bar */}
      <div
        className="w-full px-10 py-3 text-sm relative"
        style={{ backgroundColor: "#52002B", color: "#FFFFFF" }}
      >
        <div className="w-full h-full flex items-center justify-between font-medium text-[15px]">
          <span className="cursor-pointer hover:text-gray-200 transition-colors">Become a Vendor</span>
          <span className="cursor-pointer hover:text-gray-200 transition-colors">Get a Franchise</span>
        </div>

        {/* Center Icons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-3px] z-10 pointer-events-none">
          <Image
            src="/images/logos/img_frame_427321168.png"
            alt="Pets Icon"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main bar */}

      {/* <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200"> */}
      <div className="w-full px-10 py-4 flex items-center justify-between border-b border-gray-200">

        {/* Logo */}
        <Image
          src="/images/logos/img_image_3.png"
          alt="Petoty Logo"
          width={160}
          height={70}
          className="object-contain"
        />

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-[650px] mx-6">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 text-base outline-none transition-all
        hover:bg-gray-200 focus:ring-2 focus:ring-[#8B1E4F]"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10">

          {/* Wishlist */}
          <button className="hidden sm:flex items-center gap-3 text-lg font-semibold text-black hover:text-[#8B1E4F] transition">
            <Heart className="h-7 w-7 text-[#8B1E4F]" />
            <span>Wishlist</span>
          </button>

          {/* Cart */}
          <button className="hidden sm:flex items-center gap-3 text-lg font-semibold text-black hover:text-[#8B1E4F] transition">
            <ShoppingCart className="h-7 w-7 text-[#8B1E4F]" />
            <span>Cart</span>
          </button>

          {/* Login */}
          <button className="flex items-center gap-3 text-lg font-semibold bg-gray-200 px-6 py-3 rounded-full hover:bg-[#8B1E4F] hover:text-white transition">
            <User className="h-7 w-7 text-[#8B1E4F]" />
            <span>Login/Sign Up</span>
          </button>

        </div>

      </div>
      {/* Desktop nav */}
      <nav className="hidden md:block border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-12 xl:gap-16 py-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <button className="flex items-center gap-1 text-base font-semibold tracking-wide text-gray-800 hover:text-[#8B1E4F] transition-colors">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 mt-[1px]" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted border-none outline-none text-sm"
              />
            </div>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 py-3 border-t border-border mt-2">
              <button className="flex items-center gap-1.5 text-sm font-medium">
                <Heart className="h-5 w-5" /> Wishlist
              </button>
              <button className="flex items-center gap-1.5 text-sm font-medium">
                <ShoppingCart className="h-5 w-5" /> Cart
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
