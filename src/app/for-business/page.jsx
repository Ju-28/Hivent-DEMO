"use client";

import "../styles/for-business-stylesheet.css";
import "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";

import BusinessHeader from "../components/BusinessHeader";
import SearchedEventsList from "../components/SearchedEventsList";

export default function business() {
  useEffect(() => {
    // Change to "documentDidMount" later on to not have to use "use client" - import Component from react
    // Update the document title
    document.title = "Hivent | Business";
  }, []);

  const [inputText, setInputText] = useState("");
  const [displayedEventsCount, setDisplayedEventsCount] = useState(0);

  // Eventhandler function that handles the user's input in the searchbar
  // 'e' is the event object that contains, in this case, the change event of the search field when the user types something
  // 'e.target.value' is the current value of the search field
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleDisplayedEventsCount = (count) => {
    setDisplayedEventsCount(count);
  };

  return (
    <div className="business-home">
      <BusinessHeader />
      <div className="business-home-main">
        <div className="business-hero">
          <section className="business-keywords">
            Connect · Create · Elevate
          </section>
          <h1 className="business-title">
            <section className="brandname">HIVENT</section> for Business
          </h1>
          <section className="business-intro">
            <span className="brandname">HIVENT</span> for Business ermöglicht es
            Dir, Deine eigenen Events sowie Locations anzubieten und Dich mit
            anderen Geschäftspartnern zu vernetzen. Seien es Kollaborationen,
            Buchungsanfragen oder andere Businessanliegen,{" "}
            <span className="brandname">HIVENT</span> ermöglicht es.
          </section>
        </div>
        <div className="event-search-bar">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            flip="horizontal"
            size="lg"
            style={{ color: "#868686" }}
          />
          <label className="input-text-wrapper">
            <input
              className="search-text"
              type="text"
              onChange={inputHandler}
              placeholder=" "
            />
            <span className="input-text-label">Event suchen</span>
          </label>
        </div>
        {inputText && (
          <div className="event-count">
            {displayedEventsCount} Ergebnis&#040;se&#041;
          </div>
        )}
        {inputText && (
          <SearchedEventsList
            input={inputText}
            onDisplayedEventsCount={handleDisplayedEventsCount}
          />
        )}
      </div>
    </div>
  );
}
