# Rails + React Dream Stack

This is a practice full-stack application that includes a backend database of over 5000 movies indexed with Algolia.
A front end SPA with react that includes a search bar, a new movie sumbission form, a movie delete option.

## Project Pending Tasks

- [x] Backend database seed
- [x] Index records with Algolia
- [x] Create controllers and routes
- [x] Create, Index, Destroy routes for Movies
- [x] Front End Search
- [x] Front End Search with Algolia (no backend pings)
- [ ] Front End New Movie Form
- [ ] Front End Delete

## Spec Testing

- Run Rspec to test
  - Http get requests
  - Models

## Rails Backend

- Includes a Postgres database with a list of 2000+ movies seeded.
- Includes Algolia indexed search terms

- the backend, responsible for:
  - handling the HTTP routing;
  - storing items in a database;
  - indexing items in an Algolia index when they change;

## React Frontend

React front end SPA that can be used to search for, delete, and add new movies along with the [Algolia JS client](https://github.com/algolia/algoliasearch-client-js). Remember, you might not need Redux :).

- the search page needs to:

  - display a searchbox to search in the movies using Algolia;
  - show the results as a list or table;
  - it should be possible to delete any item in the results using the Backend API;

- the form page needs to:
  - display a form to create a new item;
  - validates that the data has the correct format;
  - use the Backend API to add the item to the DB and Algolia.
