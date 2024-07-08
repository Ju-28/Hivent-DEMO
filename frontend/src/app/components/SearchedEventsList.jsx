import { React, useEffect } from "react";
import data from "./DummyListData.json";

import "../styles/home-stylesheet.css";

function SearchedEventsList(props) {
  // Creates a new filtered array by filtering the original 'data' array
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return ""; // returns the original if there is no input / Use 'el' to return the complete list
    } else {
      return el.name.toLowerCase().includes(props.input); // 'includes' keyword to include all entries that contain the user's input
    }
  });

  const displayedEvents = filteredData.length;

  useEffect(() => {
    props.onDisplayedEventsCount(displayedEvents);
  }, [displayedEvents, props]);

  return (
    <ul className="searched-events-list">
      {filteredData.map((item) => (
        <li key={item.id} className="searched-event-list-item">
          <div className="searched-event-list-item-name">{item.name}</div>
          <div className="searched-event-list-item-icn">ICN</div>
        </li>
      ))}
    </ul>
  ); // Needs way better styling, preferrably a dropdown design linking to the specific event /allEvents/'event_name'
  // essential information as well as a page link to the speciic event
}

export default SearchedEventsList;
