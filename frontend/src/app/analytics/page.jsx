"use client";

import "../styles/analytics-stylesheet.css";
import "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";
import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { PieChart, pieElementClasses } from "@mui/x-charts/PieChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

import BusinessHeader from "../components/BusinessHeader";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function business() {
  useEffect(() => {
    // Change to "documentDidMount" later on to not have to use "use client" - import Component from react
    // Update the document title
    document.title = "Hivent | Analytics";
  }, []);

  const [activeSection, setActiveSection] = useState("tickets");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="business-analytics">
      <BusinessHeader />
      <div className="business-analytics-main">
        <div className="analytics-hero">
          <h1>Analytics</h1>
          <div>
            Tauche in von <span className="brandname">HIVENT</span> zu Verfügung
            gestellte Insights ein und schöpfe wertvolles Wissen für Deine
            Events und Locations.
          </div>
        </div>
        <div className="analytics-wrapper">
          <div className="analytics-left">
            <h2>Rubriken</h2>
            <div className="analytics-sections">
              <div
                className={activeSection === "tickets" ? "active-buttons" : ""}
                onClick={() => handleClick("tickets")}
              >
                Ticket Insights
              </div>
              <div
                className={activeSection === "visitors" ? "active-buttons" : ""}
                onClick={() => handleClick("visitors")}
              >
                Besucher Insights
              </div>
              <div
                className={activeSection === "socials" ? "active-buttons" : ""}
                onClick={() => handleClick("socials")}
              >
                Social Media Insights
              </div>
              <div
                className={activeSection === "hivent" ? "active-buttons" : ""}
                onClick={() => handleClick("hivent")}
              >
                <span className="brandname">HIVENT</span> Insights
              </div>
            </div>
          </div>
          <div className="analytics-right">
            {activeSection === "tickets" && (
              <BarChart
                sx={() => ({
                  [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                      stroke: "grey",
                      strokeWidth: 1,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                      fill: "grey",
                    },
                  },
                })}
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                height={350}
                xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            )}
            {activeSection === "visitors" && (
              <LineChart
                sx={() => ({
                  [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                      stroke: "grey",
                      strokeWidth: 1,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                      fill: "grey",
                    },
                  },
                })}
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                series={[
                  {
                    data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                    showMark: ({ index }) => index % 2 === 0,
                  },
                ]}
                width={600}
                height={350}
              />
            )}
            {activeSection === "socials" && (
              <PieChart
                sx={() => ({
                  [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                      stroke: "grey",
                      strokeWidth: 1,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                      fill: "grey",
                    },
                  },
                })}
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -90,
                    endAngle: 180,
                    cx: 150,
                    cy: 150,
                  },
                ]}
              />
            )}
            {activeSection === "hivent" && (
              <LineChart
                sx={() => ({
                  [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                      stroke: "grey",
                      strokeWidth: 1,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                      fill: "grey",
                    },
                  },
                })}
                width={600}
                height={350}
                series={[
                  {
                    data: uData,
                    label: "uv",
                    area: true,
                    stack: "total",
                    showMark: false,
                  },
                  {
                    data: pData,
                    label: "pv",
                    area: true,
                    stack: "total",
                    showMark: false,
                  },
                  {
                    data: amtData,
                    label: "amt",
                    area: true,
                    stack: "total",
                    showMark: false,
                  },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                // sx={{
                //   [`& .${lineElementClasses.root}`]: {
                //     display: "none",
                //   },
                // }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
