"use client";

import { React, useEffect } from "react";
import userData from "../components/DummyUserData.json";

import "../styles/profile-stylesheet.css";
import "../globals.css";

import Header from "../components/Header";

export default function Profile() {
  useEffect(() => {
    document.title = "Hivent | Profil";
  }, []);

  console.log(userData);

  const getTierClass = () => {
    switch (userData.tier) {
      case "Standard":
        return "standard-tier";
      case "Premium":
        return "premium-tier";
      case "Gold":
        return "gold-tier";
      default:
        return ""; // Default case if none of the above match
    }
  };

  const favourites = [];
  for (let i = 0; i < userData.favorites.length; i += 2) {
    favourites.push(userData.favorites.slice(i, i + 2));
  }

  const recommended = [];
  for (let i = 0; i < userData.recommended.length; i += 2) {
    recommended.push(userData.recommended.slice(i, i + 2));
  }

  return (
    <div className="hub-profile">
      <Header />
      <div className="hub-profile-main">
        <div className="hub-profile-hero">
          Willkommen, {userData.firstName}!
        </div>
        <div className="hub-profile-wrapper">
          <div className="profile-left">
            <div className="profile-image">{userData.profilePicture}</div>
            <div className="profile-information">
              <div className="profile-information-header">Deine Daten</div>
              <div className="profile-information-lists">
                <ul>
                  <li>
                    <span className="profile-information-item">Vorname: </span>
                  </li>
                  <li>
                    <span className="profile-information-item">Nachname: </span>
                  </li>
                  <li>
                    <span className="profile-information-item">E-Mail: </span>
                  </li>
                  <li>
                    <span className="profile-information-item">
                      Beigetreten am:{" "}
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>{userData.firstName}</li>
                  <li>{userData.lastName}</li>
                  <li>{userData.email}</li>
                  <li>{userData.userCreated.split("-").join(".")}</li>
                </ul>
              </div>
              <div className="account-actions">
                <div className="change-password">Passwort ändern</div>
                <div className="delete-account">Account löschen</div>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-member-status-wrapper">
              <div className={`profile-current-tier ${getTierClass()}`}>
                {userData.tier}
              </div>
              <div className="profile-tier standard">
                <div>Standard &#040;kostenlos&#041;</div>
                <ul>
                  <li>Lieblingsevents speichern</li>
                  <li>Neueste Updates deiner Lieblingsevents</li>
                  <li>Bewertungen und Kommentare für Events abgeben</li>
                </ul>
              </div>
              <div className="profile-tier premium">
                <div>Premium &#040;4,99€ mtl.&#041;</div>
                <ul>
                  <li>Alle Standardvorteile</li>
                  <li>25% auf Tickets von Partnerevents</li>
                  <li>Kostenloser Zugang zu von HIVENT gesponsorten Events</li>
                </ul>
                {userData.tier === "Standard" && (
                  <div className="upgrade-button premium">Upgrade</div>
                )}
              </div>
              <div className="profile-tier gold">
                <div>Gold &#040;15,99€ mtl.&#041;</div>
                <ul>
                  <li>Alle Standard- und Premiumvorteile</li>
                  <li>Kostenlose Tickets für Partnerevents</li>
                  <li>Abstimmungsrecht für neue Partnerevents</li>
                </ul>
                {(userData.tier === "Standard" ||
                  userData.tier === "Premium") && (
                  <div className="upgrade-button gold">Upgrade</div>
                )}
              </div>
            </div>
            <div className="profile-right-bottom">
              <div className="profile-favorites">
                <div className="profile-favorites-header">Deine Favoriten</div>
                <div className="profile-favorites-list">
                  {favourites.map((chunk, rowIndex) => (
                    <div key={rowIndex} className="favorites-row">
                      {chunk.map((item, index) => (
                        <div key={index} className="favorite-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="profile-recommended">
                <div className="profile-recommended-header">Für dich</div>
                <div className="profile-recommended-list">
                  {recommended.map((chunk, rowIndex) => (
                    <div key={rowIndex} className="recommended-row">
                      {chunk.map((item, index) => (
                        <div key={index} className="recommended-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
