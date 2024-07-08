"use client";

import { React, useEffect } from "react";

import "../styles/featured-stylesheet.css";
import "../globals.css";

import Header from "../components/Header";

export default function Featured() {
  useEffect(() => {
    // Update the document title
    document.title = "Hivent | Featured";
  }, []);

  return (
    <div className="hub-featured">
      <Header />
      <div className="hub-featured-main">
        <h1>Featured Events</h1>
      </div>
    </div>
  );
}
