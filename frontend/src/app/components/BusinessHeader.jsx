"use client";

import "../styles/for-business-stylesheet.css";
import "../globals.css";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const leftNavLinks = [
    { name: "Home", href: "/for-business" },
    { name: "Meine Events & Locations", href: "/my-events-and-locations" },
    { name: "Alle Events & Locations", href: "/events-and-locations" },
  ];

  const rightNavLinks = [
    { name: "Analytics", href: "/analytics" },
    { name: "Profil", href: "/business-profil" },
    { name: "Logout", href: "/business-login" },
  ];

  const pathname = usePathname();

  const router = useRouter();

  const redirectLandingPage = () => {
    router.push("/");
  };

  return (
    <div className="business-header">
      <div className="business-navbar-container">
        <nav className="business-navbar-left">
          {leftNavLinks.map((link) => {
            const isActive = pathname.endsWith(link.href);

            return (
              <Link
                href={link.href}
                key={link.name}
                className={isActive ? "active-nav" : ""}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <nav className="business-navbar-center">
          <img
            src="/images/HIVENT_LOGO_ONLY.png"
            alt="Hivent Logo"
            style={{ height: "80px", width: "80px" }}
            onClick={redirectLandingPage}
          />
        </nav>
        <nav className="business-navbar-right">
          {rightNavLinks.map((link) => {
            const isActive = pathname.endsWith(link.href);

            return (
              <Link
                href={link.href}
                key={link.name}
                className={isActive ? "active-nav" : ""}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
