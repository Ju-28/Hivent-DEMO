"use client";

import "../styles/home-stylesheet.css";
import "../globals.css";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const leftNavLinks = [
    { name: "Home", href: "/hub" },
    { name: "Featured", href: "/featured" },
    { name: "Alle Events", href: "/events" },
  ];

  const rightNavLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Profil", href: "/profil" },
    { name: "Login/Logout", href: "/login" },
  ];

  const pathname = usePathname();

  const router = useRouter();

  const redirectLandingPage = () => {
    router.push("/");
  };

  return (
    <div className="hub-header">
      <div className="hub-navbar-container">
        <nav className="hub-navbar-left">
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
        <nav className="hub-navbar-center">
          <img
            src="/images/HIVENT_LOGO_ONLY.png"
            alt="Hivent Logo"
            style={{ height: "80px", width: "80px" }}
            onClick={redirectLandingPage}
          />
        </nav>
        <nav className="hub-navbar-right">
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
