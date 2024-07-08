"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import LandingPageBackground from "./components/LandingPageBackground";

export default function LandingPage() {
  // const [loginVisibility, setLoginVisibility] = useState(false);
  const [backgroundVisibility, setBackgroundVisibility] = useState(true);
  const router = useRouter(); // Initialize the useRouter hook

  const toggleLoginVisibility = () => {
    // setLoginVisibility(true);
    setBackgroundVisibility(false);

    setTimeout(() => {
      router.push("/hub"); // Redirect to /hub after 1 second
    }, 0);
  };

  return (
    <main>
      {backgroundVisibility && (
        <LandingPageBackground toggleLoginVisibility={toggleLoginVisibility} />
      )}
      {/* {loginVisibility && <AuthSection />} */}
    </main>
  );
}
