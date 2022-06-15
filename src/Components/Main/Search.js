import React from "react";

function Search() {
  return (
    <>
      <div className="main-search">
        <div>
          <input placeholder="Search..." className="search-bar"></input>
          <button type="button" class="btn btn-danger">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
