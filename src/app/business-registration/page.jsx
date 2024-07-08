"use client";

import { React, useEffect } from "react";

import "../styles/business-registration-stylesheet.css";
import "../globals.css";

export default function Registration() {
  return (
    <div className="business-registration">
      <div className="business-registration-main">
        <div className="business-registration-wrapper">
          <h2 className="business-registration-title">
            <span className="brandname">HIVENT</span> Geschäftsaccount erstellen
          </h2>
          <form action="" className="registration-form">
            <div className="registration-form-inputs">
              <label className="input-email-wrapper">
                <input
                  className="registration-input"
                  type="email"
                  placeholder=" "
                />
                <span className="input-email-label">Email</span>
              </label>
              <div className="registration-name">
                <label className="input-email-wrapper">
                  <input
                    className="registration-input"
                    type="text"
                    placeholder=" "
                  />
                  <span className="input-email-label">Vorname</span>
                </label>
                <label className="input-email-wrapper">
                  <input
                    className="registration-input"
                    type="text"
                    placeholder=" "
                  />
                  <span className="input-email-label">Nachname</span>
                </label>
              </div>
              <label className="input-email-wrapper">
                <input
                  className="registration-input"
                  type="password"
                  placeholder=" "
                />
                <span className="input-email-label">Passwort</span>
              </label>
              <label className="input-email-wrapper">
                <input
                  className="registration-input"
                  type="password"
                  placeholder=" "
                />
                <span className="input-email-label">Passwort wiederholen</span>
              </label>
              <div className="accept-agb">
                <div>
                  Durch das Registrieren akzeptierst Du unsere{" "}
                  <a href="/agb">AGB</a>.
                </div>
              </div>
              <div className="registration-submit" onClick="">
                Registrieren
              </div>
              <div className="sign-in">
                Du hast bereits einen Account?{" "}
                <a href="/business-login">Login</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
