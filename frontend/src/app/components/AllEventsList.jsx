import { React, useEffect, useState } from "react";
import data from "./DummyListData.json";

import "../styles/allEvents-stylesheet.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SkeletonLoader from "./SkeletonLoader.jsx";

function AllEventsList(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    applyFilters();
  }, [
    props.input,
    props.selectedCitys,
    props.selectedThemes,
    props.selectedAttendees,
  ]);

  const applyFilters = () => {
    let filtered = data.filter((item) => {
      // Filter by name
      if (
        props.input !== "" &&
        !item.name.toLowerCase().includes(props.input.toLowerCase())
      ) {
        return false;
      }
      // Filter by city
      if (
        props.selectedCitys.length > 0 &&
        !props.selectedCitys.includes(item.city)
      ) {
        return false;
      }
      // Filter by theme
      if (
        props.selectedThemes.length > 0 &&
        !props.selectedThemes.some((theme) => item.theme.includes(theme))
      ) {
        return false;
      }
      // Filter by attendees
      if (
        props.selectedAttendees !== "" &&
        item.attendees !== props.selectedAttendees
      ) {
        return false;
      }
      return true;
    });
    setFilteredData(filtered);
    setLoading(false);
  };
  // Splitting filteredData into chunks of 4
  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 4) {
    chunkedData.push(filteredData.slice(i, i + 4));
  }

  const allEvents = data.length;
  const displayedEvents = filteredData.length;

  useEffect(() => {
    props.onAllEventsCount(allEvents);
    props.onDisplayedEventsCount(displayedEvents);
  }, [allEvents, displayedEvents, props]);

  return (
    <div className="all-events-list">
      {loading ? (
        // Display skeleton loaders while loading
        <div className="row">
          {[...Array(4)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : (
        // Display actual data once loaded
        chunkedData.map((chunk, rowIndex) => (
          <div key={rowIndex} className="row">
            {chunk.map((item) => (
              <div key={item.id} className="card">
                <div className="card-content">
                  <div className="card-event-img">Image</div>
                  <div className="card-event-name">{item.name}</div>
                  <div className="card-event-city">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#bdbdbd" }}
                      size="sm"
                    />
                    {item.city}
                  </div>
                  <div className="card-event-theme">
                    {item.theme.map((theme, index) => (
                      <span key={index} className="theme">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default AllEventsList;
