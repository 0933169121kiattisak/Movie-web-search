import React from "react";
import "./Search.css"

function Search({ value, onInputChange, onKeyPress }) {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={value}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
          className="search-input"
        />
      </div>
    );
  }

export default Search;