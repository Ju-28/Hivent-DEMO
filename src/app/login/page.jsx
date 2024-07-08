"use client";

import { React, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import "../styles/login-stylesheet.css";
import "../globals.css";

import Header from "../components/Header";

export default function Login() {
  useEffect(() => {
    // Update the document title
    document.title = "Hivent | Login";
  }, []);

  return (
    <div className="hub-auth ">
      <Header />
      <div className="hub-auth-main">
        <div className="hub-auth-wrapper">
          <h2 className="hub-auth-title">Login</h2>
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
              <div className="login-submit">Einloggen</div>
            </div>
          </form>
          <div className="register-link">
            <span>Noch kein Account? </span>
            <a className="register-button" href="/registration">
              Registrieren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
