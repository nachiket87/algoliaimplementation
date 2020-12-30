import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData.js";
import { Input } from "reactstrap";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData(searchTerm, setMovies);
  }, [searchTerm]);

  let rnMovie = [];

  if (movies) {
    rnMovie = movies.data.map((movie) => {
      return (
        <li className={"list-group-item"} key={movie.attributes.objectid}>
          {movie.attributes.title}
        </li>
      );
    });
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col" style={{ marginBottom: "3px" }}>
          <Input
            onChange={(e) => handleChange(e)}
            placeholder={`Search for a Movie`}
          />
        </div>
        <div className="col">
          <ul className={"list-group"}>{rnMovie}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
