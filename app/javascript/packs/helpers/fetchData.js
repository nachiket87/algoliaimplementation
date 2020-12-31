import { appID, adminAPI } from "./apikeys";
const algoliasearch = require("algoliasearch");
let client = null;
if (process.env.NODE_ENV === "development") {
  client = algoliasearch(appID, adminAPI);
} else {
  client = algoliasearch(process.env.appID, process.env.adminAPI);
}
const index = client.initIndex("Movie");

const fetchData = (searchTerm, setMovies) => {
  const getData = async () => {
    const data = await index.search(`${searchTerm}`);
    setMovies(data.hits);
    return data;
  };
  getData();
};

export default fetchData;
