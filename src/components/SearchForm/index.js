import React from "react";
import "./style.css";

function SearchForm() {
  return (
    <form className="search">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type a name to begin"
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
