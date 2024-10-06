import React from "react";
import { Search, BookmarkIcon, ShoppingCart, User } from "lucide-react";

export const Navbars = () => {
  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="w-full bg-black text-white text-center py-3 text-sm font-bold">
        FREE DELIVERY ON ABOVE RS.1000/- || USE COUPON FIRST1000
      </div>

      {/* Main navbar */}
      <nav className="w-full bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">ACKON</span>
            </div>

            {/* Navigation links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="hover:text-red-600 px-3 py-2 text-sm font-bold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 px-3 py-2 text-sm font-bold"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 px-3 py-2 text-sm font-bold"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 px-3 py-2 text-sm font-bold"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 px-3 py-2 text-sm font-bold"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 px-3 py-2 text-sm font-bold"
                >
                  Join Us
                </a>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover:text-red-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="hover:text-red-600">
                <BookmarkIcon className="h-5 w-5 " />
              </button>
              <button className="hover:text-red-600">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="hover:text-red-600">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
