"use client";

import "../styles/events-locations-stylesheet.css";
import "../globals.css";

import { useState, useEffect } from "react";
import BusinessHeader from "../components/BusinessHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import AllEventsList from "../components/AllEventsList";
import AllLocationsList from "../components/AllLocationsList";
import data from "../components/DummyListData.json";

const citys = [
  {
    name: "Köln",
    value: "Köln",
  },
  {
    name: "Düsseldorf",
    value: "Düsseldorf",
  },
  {
    name: "München",
    value: "München",
  },
  {
    name: "Frankfurt",
    value: "Frankfurt",
  },
  {
    name: "Münster",
    value: "Münster",
  },
  {
    name: "Berlin",
    value: "Berlin",
  },
  {
    name: "Hamburg",
    value: "Hamburg",
  },
  {
    name: "Stuttgart",
    value: "Stuttgart",
  },
  {
    name: "Dresden",
    value: "Dresden",
  },
  {
    name: "Bremen",
    value: "Bremen",
  },
  {
    name: "Hannover",
    value: "Hannover",
  },
  {
    name: "Leipzig",
    value: "Leipzig",
  },
  {
    name: "Nürnberg",
    value: "Nürnberg",
  },
  {
    name: "Bochum",
    value: "Bochum",
  },
  {
    name: "Dortmund",
    value: "Dortmund",
  },
  {
    name: "Bonn",
    value: "Bonn",
  },
  {
    name: "Freiburg",
    value: "Freiburg",
  },
  {
    name: "Mannheim",
    value: "Mannheim",
  },
  {
    name: "Karlsruhe",
    value: "Karlsruhe",
  },
  {
    name: "Mainz",
    value: "Mainz",
  },
  {
    name: "Augsburg",
    value: "Augsburg",
  },
  {
    name: "Mönchengladbach",
    value: "Mönchengladbach",
  },
  {
    name: "Wiesbaden",
    value: "Wiesbaden",
  },
  {
    name: "Gelsenkirchen",
    value: "Gelsenkirchen",
  },
  {
    name: "Aachen",
    value: "Aachen",
  },
  {
    name: "Braunschweig",
    value: "Braunschweig",
  },
];

const themes = [
  {
    name: "Trap",
    value: "Trap",
  },
  {
    name: "Technology",
    value: "Technology",
  },
  {
    name: "Food",
    value: "Food",
  },
  {
    name: "Nature",
    value: "Nature",
  },
  {
    name: "Health",
    value: "Health",
  },
  {
    name: "Hip Hop",
    value: "Hip Hop",
  },
  {
    name: "Cacti",
    value: "Cacti",
  },
  {
    name: "Desert",
    value: "Desert",
  },
  {
    name: "Frozen Desserts",
    value: "Frozen Desserts",
  },
  {
    name: "Ice Cream",
    value: "Ice Cream",
  },
  {
    name: "Electronic Music",
    value: "Electronic Music",
  },
  {
    name: "Synthwave",
    value: "Synthwave",
  },
  {
    name: "Space",
    value: "Space",
  },
  {
    name: "Sci-Fi",
    value: "Sci-Fi",
  },
  {
    name: "Future",
    value: "Future",
  },
  {
    name: "Gaming",
    value: "Gaming",
  },
  {
    name: "Fitness",
    value: "Fitness",
  },
  {
    name: "Artificial Intelligence",
    value: "Artificial Intelligence",
  },
  {
    name: "Astronomy",
    value: "Astronomy",
  },
  {
    name: "Science",
    value: "Science",
  },
  {
    name: "Physics",
    value: "Physics",
  },
  {
    name: "Northern Lights",
    value: "Northern Lights",
  },
  {
    name: "Exploration",
    value: "Exploration",
  },
  {
    name: "Virtual Reality",
    value: "Virtual Reality",
  },
  {
    name: "Music",
    value: "Music",
  },
  {
    name: "Sound",
    value: "Sound",
  },
  {
    name: "Illusion",
    value: "Illusion",
  },
  {
    name: "Phenomenon",
    value: "Phenomenon",
  },
  {
    name: "Mythology",
    value: "Mythology",
  },
  {
    name: "Rebirth",
    value: "Rebirth",
  },
  {
    name: "Weather",
    value: "Weather",
  },
  {
    name: "Snow",
    value: "Snow",
  },
  {
    name: "Fire",
    value: "Fire",
  },
  {
    name: "Heat",
    value: "Heat",
  },
  {
    name: "Sky",
    value: "Sky",
  },
  {
    name: "Change",
    value: "Change",
  },
  {
    name: "Innovation",
    value: "Innovation",
  },
  {
    name: "Mystery",
    value: "Mystery",
  },
  {
    name: "Magic",
    value: "Magic",
  },
  {
    name: "Fantasy",
    value: "Fantasy",
  },
  {
    name: "Water",
    value: "Water",
  },
  {
    name: "Peak",
    value: "Peak",
  },
  {
    name: "Success",
    value: "Success",
  },
  {
    name: "Pyrotechnik",
    value: "Pyrotechnik",
  },
  {
    name: "Feuer",
    value: "Feuer",
  },
  {
    name: "Wald",
    value: "Wald",
  },
  {
    name: "Winter",
    value: "Winter",
  },
  {
    name: "Klang",
    value: "Klang",
  },
  {
    name: "Sterne",
    value: "Sterne",
  },
  {
    name: "Himmel",
    value: "Himmel",
  },
  {
    name: "Pixel",
    value: "Pixel",
  },
  {
    name: "Digital",
    value: "Digital",
  },
  {
    name: "Kraft",
    value: "Kraft",
  },
  {
    name: "Digitalisierung",
    value: "Digitalisierung",
  },
  {
    name: "Internet",
    value: "Internet",
  },
  {
    name: "Universum",
    value: "Universum",
  },
  {
    name: "Quanten",
    value: "Quanten",
  },
  {
    name: "Nordlicht",
    value: "Nordlicht",
  },
  {
    name: "Wind",
    value: "Wind",
  },
  {
    name: "Sturm",
    value: "Sturm",
  },
  {
    name: "Weltraum",
    value: "Weltraum",
  },
  {
    name: "Reisen",
    value: "Reisen",
  },
  {
    name: "Virtualität",
    value: "Virtualität",
  },
  {
    name: "Simulation",
    value: "Simulation",
  },
  {
    name: "Schall",
    value: "Schall",
  },
  {
    name: "Wellen",
    value: "Wellen",
  },
  {
    name: "Zauber",
    value: "Zauber",
  },
  {
    name: "Phönix",
    value: "Phönix",
  },
  {
    name: "Hölle",
    value: "Hölle",
  },
  {
    name: "Oase",
    value: "Oase",
  },
  {
    name: "Finsternis",
    value: "Finsternis",
  },
  {
    name: "Lawine",
    value: "Lawine",
  },
];

const averageAttendees = [
  {
    name: "10-50",
    value: "10-50",
  },
  {
    name: "50-150",
    value: "50-150",
  },
  {
    name: "150-500",
    value: "150-500",
  },
  {
    name: "500<",
    value: "500<",
  },
];

export default function AllEvents() {
  useEffect(() => {
    // Update the document title
    document.title = "Hivent | Events";
  }, []);

  const [allEventsCount, setAllEventsCount] = useState(0);
  const [displayedEventsCount, setDisplayedEventsCount] = useState(0);
  const [allLocationsCount, setAllLocationsCount] = useState(0);
  const [displayedLocationsCount, setDisplayedLocationsCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState(false);
  const [selectedCitys, setSelectedCitys] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedAttendees, setSelectedAttendees] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [filteredCitys, setFilteredCitys] = useState([]);
  const [filteredThemes, setFilteredThemes] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [cityFilterText, setCityFilterText] = useState("");
  const [themeFilterText, setThemeFilterText] = useState("");
  const [switchPage, setSwitchPage] = useState("events");

  const handleSwitchPage = (page) => {
    setSwitchPage(page);
  };

  const handleFilter = () => {
    setFilter((prevFilter) => !prevFilter);
    setIsActive(!isActive);
  };

  const handleAllEventsCount = (count) => {
    setAllEventsCount(count);
  };

  const handleDisplayedEventsCount = (count) => {
    setDisplayedEventsCount(count);
  };

  const handleAllLocationsCount = (count) => {
    setAllLocationsCount(count);
  };

  const handleDisplayedLocationsCount = (count) => {
    setDisplayedLocationsCount(count);
  };

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const handleCheckboxChange = (setSelectedFunction, selectedArray, value) => {
    if (selectedArray.includes(value)) {
      setSelectedFunction(selectedArray.filter((item) => item !== value));
    } else {
      setSelectedFunction([...selectedArray, value]);
    }
  };

  const handleRadioChange = (setSelectedFunction, value) => {
    setSelectedFunction(value);
  };

  const submitFilter = () => {
    setFiltersApplied(true);
    setFilteredCitys(selectedCitys);
    setFilteredThemes(selectedThemes);
    setFilteredAttendees(selectedAttendees);
  };

  const resetFilter = () => {
    setSelectedCitys([]);
    setSelectedThemes([]);
    setSelectedAttendees("");
    setFiltersApplied(false);
    setFilteredCitys([]);
    setFilteredThemes([]);
    setFilteredAttendees("");
    setCityFilterText("");
    setThemeFilterText("");
  };

  const handleCityFilterTextChange = (e) => {
    setCityFilterText(e.target.value.toLowerCase());
  };

  const handleThemeFilterTextChange = (e) => {
    setThemeFilterText(e.target.value.toLowerCase());
  };

  const filteredCitysList = citys.filter((city) =>
    city.name.toLowerCase().includes(cityFilterText)
  );

  const filteredThemesList = themes.filter((theme) =>
    theme.name.toLowerCase().includes(themeFilterText)
  );

  return (
    <div className="business-all">
      <BusinessHeader />
      <div className="business-all-main">
        <div className="business-all-hero">
          <h1 className="business-all-title">Alle Events und Locations</h1>
          <section className="business-all-intro">
            Hier findest du alle auf
            <span className="brandname"> HIVENT</span> angebotene Events und
            Locations. Entdecke neue Möglichkeiten Dich mit anderen aus Deiner
            Branche zu vernetzen.
          </section>
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
        </div>
        {switchPage === "events" && (
          <div className="all-events">
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
                  value={inputText}
                  placeholder=" "
                />
                <span className="input-text-label">Event suchen</span>
              </label>
              <div className="event-search-bar-filter-wrapper">
                <div
                  className={
                    isActive ? "active" : "event-search-bar-filter-button"
                  }
                  onClick={handleFilter}
                >
                  <FontAwesomeIcon
                    icon={faFilter}
                    style={{ color: "#bdbdbd" }}
                    className={isActive ? "active" : ""}
                  />
                  Filter
                </div>
                {filter && (
                  <div className="filter-wrapper">
                    <div className="filter-categories">
                      <div className="city-filter-wrapper">
                        <input
                          className="category-filter"
                          type="text"
                          placeholder="Städte"
                          value={cityFilterText}
                          onChange={handleCityFilterTextChange}
                        />
                        <div className="filter-options">
                          {filteredCitysList.map((city) => (
                            <label key={city.name} className="checkbox-label">
                              <input
                                type="checkbox"
                                value={city.name}
                                checked={selectedCitys.includes(city.name)}
                                onChange={() =>
                                  handleCheckboxChange(
                                    setSelectedCitys,
                                    selectedCitys,
                                    city.name
                                  )
                                }
                              />
                              <div>{city.name}</div>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="theme-filter-wrapper">
                        <input
                          className="category-filter"
                          type="text"
                          placeholder="Genres"
                          value={themeFilterText}
                          onChange={handleThemeFilterTextChange}
                        />
                        <div className="filter-options">
                          {filteredThemesList.map((theme) => (
                            <label key={theme.name} className="checkbox-label">
                              <input
                                type="checkbox"
                                value={theme.name}
                                checked={selectedThemes.includes(theme.name)}
                                onChange={() =>
                                  handleCheckboxChange(
                                    setSelectedThemes,
                                    selectedThemes,
                                    theme.name
                                  )
                                }
                              />
                              <div>{theme.name}</div>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="attendees-filter-wrapper">
                        <div className="category-filter">Besucher</div>
                        <div className="filter-options">
                          {averageAttendees.map((attendee) => (
                            <label
                              key={attendee.name}
                              className="checkbox-label"
                            >
                              <input
                                type="radio"
                                name="attendees"
                                value={attendee.name}
                                checked={selectedAttendees === attendee.name}
                                onChange={() =>
                                  handleRadioChange(
                                    setSelectedAttendees,
                                    attendee.name
                                  )
                                }
                              />
                              <div>{attendee.name}</div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="filter-buttons">
                      <div className="reset-filter" onClick={resetFilter}>
                        Löschen
                      </div>
                      <div className="submit-filter" onClick={submitFilter}>
                        Suchen
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="event-count">
              {displayedEventsCount} von {allEventsCount} Events
            </div>
            <div className="all-events-wrapper">
              <AllEventsList
                input={inputText}
                onAllEventsCount={handleAllEventsCount}
                onDisplayedEventsCount={handleDisplayedEventsCount}
                selectedCitys={filtersApplied ? filteredCitys : []}
                selectedThemes={filtersApplied ? filteredThemes : []}
                selectedAttendees={filtersApplied ? filteredAttendees : ""}
              />
            </div>
          </div>
        )}
        {switchPage === "locations" && (
          <div className="all-locations">
            <div className="location-search-bar">
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
                  value={inputText}
                  placeholder=" "
                />
                <span className="input-text-label">Location suchen</span>
              </label>
              <div className="location-search-bar-filter-wrapper">
                <div
                  className={
                    isActive ? "active" : "location-search-bar-filter-button"
                  }
                  onClick={handleFilter}
                >
                  <FontAwesomeIcon
                    icon={faFilter}
                    style={{ color: "#bdbdbd" }}
                    className={isActive ? "active" : ""}
                  />
                  Filter
                </div>
                {filter && (
                  <div className="filter-wrapper">
                    <div className="filter-categories">
                      <div className="city-filter-wrapper">
                        <input
                          className="category-filter"
                          type="text"
                          placeholder="Städte"
                          value={cityFilterText}
                          onChange={handleCityFilterTextChange}
                        />
                        <div className="filter-options">
                          {filteredCitysList.map((city) => (
                            <label key={city.name} className="checkbox-label">
                              <input
                                type="checkbox"
                                value={city.name}
                                checked={selectedCitys.includes(city.name)}
                                onChange={() =>
                                  handleCheckboxChange(
                                    setSelectedCitys,
                                    selectedCitys,
                                    city.name
                                  )
                                }
                              />
                              <div>{city.name}</div>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="theme-filter-wrapper">
                        <input
                          className="category-filter"
                          type="text"
                          placeholder="Genres"
                          value={themeFilterText}
                          onChange={handleThemeFilterTextChange}
                        />
                        <div className="filter-options">
                          {filteredThemesList.map((theme) => (
                            <label key={theme.name} className="checkbox-label">
                              <input
                                type="checkbox"
                                value={theme.name}
                                checked={selectedThemes.includes(theme.name)}
                                onChange={() =>
                                  handleCheckboxChange(
                                    setSelectedThemes,
                                    selectedThemes,
                                    theme.name
                                  )
                                }
                              />
                              <div>{theme.name}</div>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="attendees-filter-wrapper">
                        <div className="category-filter">Besucher</div>
                        <div className="filter-options">
                          {averageAttendees.map((attendee) => (
                            <label
                              key={attendee.name}
                              className="checkbox-label"
                            >
                              <input
                                type="radio"
                                name="attendees"
                                value={attendee.name}
                                checked={selectedAttendees === attendee.name}
                                onChange={() =>
                                  handleRadioChange(
                                    setSelectedAttendees,
                                    attendee.name
                                  )
                                }
                              />
                              <div>{attendee.name}</div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="filter-buttons">
                      <div className="reset-filter" onClick={resetFilter}>
                        Löschen
                      </div>
                      <div className="submit-filter" onClick={submitFilter}>
                        Suchen
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="location-count">
              {displayedLocationsCount} von {allLocationsCount} Locations
            </div>
            <div className="all-locations-wrapper">
              <AllLocationsList
                input={inputText}
                onAlllocationsCount={handleAllLocationsCount}
                onDisplayedlocationsCount={handleDisplayedLocationsCount}
                selectedCitys={filtersApplied ? filteredCitys : []}
                selectedThemes={filtersApplied ? filteredThemes : []}
                selectedAttendees={filtersApplied ? filteredAttendees : ""}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
