import React from "react";
import "../styles/Feeds.css";

function Feeds() {
  return (
    <div className="feed-container">
      <div className="leftFeed-container">
        <p>Global Feed</p>
        <div className="global-feeds">
          <div className="left-global-feeds"></div>
          <div className="right-global-feeds"></div>
        </div>
      </div>
      <div className="rightFeed-container">
        <div className="filter-feed-container">
          <p>Popular Tags</p>
          <div className="search-filter-div">
            <p>Humanity</p>
          </div>
          <div className="search-filter-div">
            <p>Gandhi</p>
          </div>
          <div className="search-filter-div">
            <p>SIDA</p>
          </div>
          <div className="search-filter-div">
            <p>BlackLivesMatter</p>
          </div>
          <div className="search-filter-div">
            <p>Dragon Ball Z</p>
          </div>
          <div className="search-filter-div">
            <p>Death Note</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
