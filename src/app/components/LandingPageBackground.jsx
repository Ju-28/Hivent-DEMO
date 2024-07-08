import "../styles/landing-page-stylesheet.css";
import "../globals.css";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ParticlesBackground from "./ParticlesBackground";

const LandingPageBackground = ({ toggleLoginVisibility }) => {
  const router = useRouter();

  const redirectHub = () => {
    router.push("/hub");
  };

  const redirectBusiness = () => {
    router.push("/business-login");
  };

  return (
    <div className="landing-page-mask">
      <img
        src="/images/HIVENT_LOGO_ONLY.png"
        alt="Hivent Logo"
        onClick={toggleLoginVisibility}
      />
      <div className="landing-page-buttons">
        <div className="hub-button" onClick={redirectHub}>
          <span className="brandname">HIVENT</span> Hub
        </div>
        <div className="analytics-button" onClick={redirectBusiness}>
          <span className="brandname">HIVENT</span> for Business
        </div>
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default LandingPageBackground;
