"use client";

import { React, useEffect } from "react";
import userData from "../components/DummyUserData.json";

import "../styles/business-profile-stylesheet.css";
import "../globals.css";

import BusinessHeader from "../components/BusinessHeader";

export default function Profile() {
  useEffect(() => {
    document.title = "Hivent | Geschäftsprofil";
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
    <div className="business-profile">
      <BusinessHeader />
      <div className="business-profile-main">
        <div className="business-profile-hero">
          Willkommen, {userData.firstName}!
        </div>
        <div className="business-profile-wrapper">
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
              <div className="profile-insights-title">
                Deine Aktuellen Insights
              </div>
              <div className="profile-insight standard">
                <div>Angebotene Events</div>
                <ul>
                  <li>3</li>
                </ul>
              </div>
              <div className="profile-insight premium">
                <div>Besucher im letzten Monat</div>
                <ul>
                  <li>483</li>
                </ul>
              </div>
              <div className="profile-insight gold">
                <div>Durch Hivent erreichte Anzahl an Personen</div>
                <ul>
                  <li>1842</li>
                </ul>
              </div>
            </div>
            <div className="profile-right-bottom">
              <div className="profile-favorites">
                <div className="profile-favorites-header">Deine Events</div>
                <div className="profile-favorites-list">
                  Noch keine Events hinzugefügt
                  <a>Jetzt hinzufügen</a>
                  {/* {favourites.map((chunk, rowIndex) => (
                    <div key={rowIndex} className="favorites-row">
                      {chunk.map((item, index) => (
                        <div key={index} className="favorite-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))} */}
                </div>
              </div>
              <div className="profile-recommended">
                <div className="profile-recommended-header">
                  Deine Locations
                </div>
                <div className="profile-recommended-list">
                  Noch keine Locations hinzugefügt
                  <a>Jetzt hinzufügen</a>
                  {/* {recommended.map((chunk, rowIndex) => (
                    <div key={rowIndex} className="recommended-row">
                      {chunk.map((item, index) => (
                        <div key={index} className="recommended-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
