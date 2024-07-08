"use client";

import { React, useEffect, useState } from "react";

import "../styles/my-events-locations-stylesheet.css";
// import "../globals.css";

import myEventsData from "../components/DummyEventsData.json";
import myLocationsData from "../components/DummyLocationsData.json";

import BusinessHeader from "../components/BusinessHeader";

export default function myEventsAndLocations() {
  const [switchPage, setSwitchPage] = useState("events");
  const [deletePopup, setDeletePopup] = useState(false);

  const handleSwitchPage = (page) => {
    setSwitchPage(page);
  };

  const showDeletePopup = () => {
    setDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setDeletePopup(false);
  };

  return (
    <div className="business-my-events-locations">
      <BusinessHeader />
      {deletePopup && (
        <div className="delete-popup-wrapper">
          <div className="delete-popup">
            <div className="delete-message">
              Bist du sicher, dass Du dieses Event / diese Location endgültig
              löschen willst? Du kannst es nicht rückgängig machen!
            </div>
            <div className="popup-buttons">
              <div className="popup-button abort" onClick={closeDeletePopup}>
                Abbrechen
              </div>
              <div className="popup-button delete" onClick={closeDeletePopup}>
                Ja, ich bin sicher.{" "}
                {/* Add another onClick function later, that closes the popup AND deletes the event from the database, needs to pass ID as prop from the selected event */}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="business-my-events-locations-main">
        <div className="business-my-events-locations-hero">
          <h1 className="business-my-events-locations-title">
            Meine Events & Locations
          </h1>
          <div className="business-my-events-locations-intro">
            Hier findest Du von Dir hinzugefügte Events und Locations und hast
            ebenfalls die Möglichkeit neue zu erstellen, welche anschließend
            über <span className="brandname">HIVENT</span> zu finden sind.
          </div>
        </div>
        <div className="my-events-locations-wrapper">
          <div className="switch-page-buttons">
            <div
              className={switchPage === "events" ? "active-button" : ""}
              onClick={() => handleSwitchPage("events")}
            >
              Events
            </div>
            <div
              className={switchPage === "locations" ? "active-button" : ""}
              onClick={() => handleSwitchPage("locations")}
            >
              Locations
            </div>
          </div>
          {switchPage === "events" && (
            <div className="my-events">
              {myEventsData.map((event, index) => (
                <div key={index} className="event-card">
                  <img src={event.image} />
                  <div className="event-information-list">
                    <div className="event-information name">{event.name}</div>
                    <div className="event-information city">{event.city}</div>
                    <div className="event-information date">
                      {event.nextDate}
                    </div>
                    <div className="event-information themes">
                      {event.theme.map((theme, index) => (
                        <span key={index} className="theme">
                          {theme}
                        </span>
                      ))}
                    </div>
                    <div className="event-information attendees">
                      {event.attendees} Besucher
                    </div>
                    <div className="event-information slogan">
                      {event.slogan}
                    </div>
                    <div className="event-information description">
                      {event.description}
                    </div>
                    <div className="event-information hivent-page">
                      <a href={event.hiventLink}>Hivent-Seite</a>
                    </div>
                    <div className="event-information website">
                      <a href={event.websiteLink} target="blank">
                        Website
                      </a>
                    </div>
                  </div>
                  <div className="event-buttons">
                    <div className="event-button edit">Bearbeiten</div>
                    <div
                      className="event-button delete"
                      onClick={showDeletePopup}
                    >
                      Löschen
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {switchPage === "locations" && (
            <div className="my-locations">
              {myLocationsData.map((location, index) => (
                <div key={index} className="location-card">
                  <img src={location.image} alt="Bild der Location" />
                  <div className="location-information-list">
                    <div className="location-information name">
                      {location.name}
                    </div>
                    <div className="location-information city">
                      {location.city}
                    </div>
                    <div className="location-information postal">
                      {location.postalCode}
                    </div>
                    <div className="location-information street">
                      {location.street} {location.houseNumber}
                    </div>
                    <div className="location-information themes">
                      {location.theme.map((theme, index) => (
                        <span key={index} className="theme">
                          {theme}
                        </span>
                      ))}
                    </div>
                    <div className="location-information attendees">
                      {location.attendees} Besucher
                    </div>
                    <div className="location-information description">
                      {location.description}
                    </div>
                    <div className="location-information hivent-page">
                      <a href={location.hiventLink}>Hivent-Seite</a>
                    </div>
                    <div className="location-information website">
                      <a href={location.websiteLink} target="blank">
                        Website
                      </a>
                    </div>
                  </div>
                  <div className="location-buttons">
                    <div className="location-button edit">Bearbeiten</div>
                    <div
                      className="location-button delete"
                      onClick={showDeletePopup}
                    >
                      Löschen
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
