import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Store } from "../utils/Store";

import data from "./DummyListData.json";

const data = data;

const PAGE_SIZE = 2;

const cities = [
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

export default function Filter(props, data) {
  const router = useRouter();

  const {
    query = "all",
    cities = "all",
    themes = "all",
    averageAttendees = "all",
  } = router.query;

  const filterSearch = (page, cities, themes, sort, searchQuery) => {
    const { query } = router;
    if (page) query.page = page;
    if (cities) query.cities = cities;
    if (themes) query.themes = themes;
    if (sort) query.sort = sort;
    if (searchQuery) query.searchQuery = searchQuery;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const citiesHandler = (e) => {
    filterSearch({ cities: e.target.value });
  };
  const pageHandler = (e) => {
    filterSearch({ page });
  };
  const themesHandler = (e) => {
    filterSearch({ themes: e.target.value });
  };
  const averageAttendeesHandler = (e) => {
    filterSearch({ averageAttendees: e.target.value });
  };

  const { state, dispatch } = useContext(Store);

  return (
    <div className="filter-wrapper">
      <div className="city-filer-wrapper">
        <h2>Ort</h2>
        <select className="city-filter" value={cities} onChange={citiesHandler}>
          <option value="all">Alle</option>
          {cities &&
            cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>
      <div className="theme-filter-wrapper">
        <h2>Ort</h2>
        <select
          className="theme-filter"
          value={themes}
          onChange={themesHandler}
        >
          <option value="all">Alle</option>
          {themes &&
            themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
        </select>
      </div>
      <div className="attendees-filter-wrapper">
        <h2>Ort</h2>
        <select
          className="attendees-filter"
          value={averageAttendees}
          onChange={averageAttendeesHandlerHandler}
        >
          <option value="all">Alle</option>
          {averageAttendees &&
            themes.map((averageAttendee) => (
              <option key={averageAttendee} value={averageAttendee}>
                {averageAttendee}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
