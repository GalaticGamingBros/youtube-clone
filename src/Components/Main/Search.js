import React from "react";

import { Button, Form } from "react-bootstrap";

function Search() {
  return (
    <>
      <div className="main-search">
        <div>
          <input placeholder="Search..." className="search-bar"></input>
          <Button variant="danger" type="button" class="btn">
            Search
          </Button>
        </div>
      </div>
    </>
  );
}

export default Search;
