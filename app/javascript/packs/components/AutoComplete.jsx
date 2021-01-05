// Work in Progress for Algolia customization.

import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "6XU8A3UQ7F",
  "17cd00c2604eddad10bffe096f95ff4c"
);

const AutoComplete = () => (
  <>
    <InstantSearch indexName="Movie" searchClient={searchClient}>
      <SearchBox autofocus />
    </InstantSearch>
  </>
);

export default AutoComplete;
