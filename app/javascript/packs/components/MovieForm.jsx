import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";

const MovieForm = () => {
  const [movieData, setMovieData] = useState({});
  const [redirectStatus, setRedirectStatus] = useState(false);

  const handleChange = (target) => {
    if (target.name === "year") {
      const year = target.value.split("-")[0];
      setMovieData({ ...movieData, [target.name]: year });
    } else {
      setMovieData({ ...movieData, [target.name]: target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("api/v1/movies", movieData).then(() => {
      setRedirectStatus(true);
    });
  };
  if (redirectStatus) return <Redirect to="/" />;
  return (
    <div>
      <h1>Add a Movie</h1>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <FormGroup>
          <Label for="title">Movie Title</Label>
          <Input
            type="text"
            placeholder="Movie Name"
            name="title"
            onChange={(e) => handleChange(e.target)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="year">Movie Year</Label>
          <Input
            type="month"
            id="datepicker"
            name="year"
            onChange={(e) => handleChange(e.target)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            type="select"
            name="rating"
            id="rating"
            onChange={(e) => handleChange(e.target)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="score">Score</Label>
          <Input
            type="number"
            step="any"
            placeholder="score"
            name="score"
            onChange={(e) => handleChange(e.target)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default MovieForm;
