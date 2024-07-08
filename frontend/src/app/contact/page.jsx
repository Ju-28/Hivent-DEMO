"use client";

import { React, useEffect } from "react";

import "../styles/contact-stylesheet.css";
import "../globals.css";

import Header from "../components/Header";

export default function Contact() {
  useEffect(() => {
    // Update the document title
    document.title = "Hivent | Kontakt";
  }, []);

  return (
    <div className="hub-contact">
      <Header />
      <div className="hub-contact-main">
        <h1>Kontakt</h1>
      </div>
    </div>
  );
}
