"use client";

import "../styles/home-stylesheet.css";
import "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import SearchedEventsList from "../components/SearchedEventsList";

export default function Hub() {
  useEffect(() => {
    // Change to "documentDidMount" later on to not have to use "use client" - import Component from react
    // Update the document title
    document.title = "Hivent | Home";
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
    <div className="hub-home">
      <Header />
      <div className="hub-home-main">
        <div className="hub-hero">
          <section className="hub-keywords">Connect · Create · Elevate</section>
          <h1 className="hub-title">
            Willkommen bei <section className="brandname">HIVENT</section>
          </h1>
          <section className="hub-intro">
            <span className="brandname">HIVENT</span> bringt Gäste, Hosts und
            Locations an einem einzigen Ort zusammen. Egal ob Trap Party oder
            Food Festival - Hier findest du was du suchst.
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
