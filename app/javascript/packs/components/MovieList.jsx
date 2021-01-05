import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData.js";
import { Input } from "reactstrap";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("The Matrix");

  useEffect(() => {
    fetchData(searchTerm, setMovies);
  }, [searchTerm]);

  let rnMovie = [];

  if (movies) {
    rnMovie = movies.map((movie) => {
      return (
        <li className={"list-group-item"} key={movie.objectID}>
          {movie.title} ({movie.year})
        </li>
      );
    });
  }

  const debounced = useDebouncedCallback((value) => {
    setSearchTerm(value.trim());
  }, 1000);

  return (
    <>
      <div className="row d-flex">
        <div className="col lg-12">
          <Input
            type="search"
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
      <Link to="/add">Add a movie </Link>
    </>
  );
};

export default MovieList;
