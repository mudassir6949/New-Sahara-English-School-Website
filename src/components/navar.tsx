"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <ul className="flex items-center justify-between px-6 py-4 text-red-600 text-lg font-semibold">
        {/* Logo */}
        <li className="flex items-center space-x-2">
          <img
            src="/logo_with_new_bg.png"
            className="h-[40px] w-auto"
            alt="Coreline Logo"
          />
          <span>CORELINE</span>
        </li>

        {/* Menu Items */}
        <div className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/admission">
              <li>Admission</li>
            </Link>
          </li>
          <li>
            <Link href="/parents">
              <li>Parents</li>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
