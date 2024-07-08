import React from "react";
import "../styles/skeletonLoader-stylesheet.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card card is-loading">
      <div className="skeleton-card-content card-content">
        <div className="skeleton-card-event-img card-event-img"></div>
        <div className="skeleton-card-event-name card-event-name"></div>
        <div className="skeleton-card-event-city"></div>
        <div className="skeleton-card-event-theme card-event-theme"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
