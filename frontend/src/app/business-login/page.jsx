"use client";

import { React, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import "../styles/businessLogin-stylesheet.css";
import "../globals.css";

export default function Login() {
  // Need logic to forward directly to /business if already logged in

  const router = useRouter();

  useEffect(() => {
    // Update the document title
    document.title = "Hivent | Geschäftslogin";
  }, []);

  const submitLogin = () => {
    // Add later: prevent logging in and forwarding if credentials are wrong etc.
    router.push("/for-business");
  };

  return (
    <div className="business-auth">
      <div className="business-auth-header">
        <h1>
          <span className="brandname">HIVENT</span> für Hosts und Locations
        </h1>
        <div>
          Melde dich hier an, wenn du eigene Events oder Locations zu{" "}
          <span className="brandname">HIVENT</span> hinzufügen möchtest.
        </div>
      </div>
      <div className="business-auth-main">
        <div className="business-auth-wrapper">
          <h2 className="business-auth-title">Geschäftslogin</h2>
          <form action="" className="login-form">
            <div className="login-form-inputs">
              <label className="input-email-wrapper">
                <input className="login-input" type="email" placeholder=" " />
                <span className="input-email-label">Email</span>
              </label>
              <label className="input-email-wrapper">
                <input
                  className="login-input"
                  type="password"
                  placeholder=" "
                />
                <span className="input-email-label">Passwort</span>
              </label>
              <div className="remember-forget">
                <label>
                  <input type="checkbox"></input>
                  Angemeldet bleiben
                </label>
                <div>Passwort vergessen?</div>
              </div>
              <div className="login-submit" onClick={submitLogin}>
                Einloggen
              </div>
            </div>
          </form>
          <div className="register-link">
            <span>Noch kein Account? </span>
            <a className="register-button" href="/business-registration">
              Registrieren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
