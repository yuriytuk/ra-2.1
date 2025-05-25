import React from "react";
import "../App.css";

const Toolbar = ({ handleSelectFilter, filters, selected }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          className={selected === filter ? "App-link" : ""}
          onClick={() => handleSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;