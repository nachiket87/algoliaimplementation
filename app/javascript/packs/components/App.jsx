import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData.js";
import { Input } from "reactstrap";
import { useDebouncedCallback } from "use-debounce";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("Star Wars");

  useEffect(() => {
    fetchData(searchTerm, setMovies);
  }, [searchTerm]);

  let rnMovie = [];

  if (movies) {
    rnMovie = movies.data.map((movie) => {
      return (
        <li className={"list-group-item"} key={movie.attributes.objectid}>
          {movie.attributes.title} ({movie.attributes.year})
        </li>
      );
    });
  }

  const debounced = useDebouncedCallback((value) => {
    setSearchTerm(value.trim());
  }, 1000);

  return (
    <div className="container my-3">
      <div className="row d-flex">
        <div className="col lg-12">
          <Input
            onChange={(e) => debounced.callback(e.target.value)}
            placeholder={`Search for a Movie`}
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <ul className={"list-group"}>{rnMovie}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
