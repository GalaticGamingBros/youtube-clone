import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../NavBar/About";
import Search from "./Search";
import SearchResults from "./SearchResults";

function Main() {
  let keyNum = 0;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={[
            <Search key={(keyNum += 1)} />,
            <SearchResults key={(keyNum += 2)} />,
          ]}
        />

        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default Main;
