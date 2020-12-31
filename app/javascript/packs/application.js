// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
const algoliasearch = require("algoliasearch");

const client = algoliasearch("6XU8A3UQ7F", "c82364b5d1d8961392c091ead329f573");
const index = client.initIndex("Movie");

Rails.start();
Turbolinks.start();
ActiveStorage.start();
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap";
