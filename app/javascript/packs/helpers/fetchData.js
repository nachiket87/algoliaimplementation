import { appID, adminAPI } from "./apikeys";
const algoliasearch = require("algoliasearch");
const client = algoliasearch(appID, adminAPI);
const index = client.initIndex("Movie");

const fetchData = (searchTerm, setMovies) => {
  const getData = async () => {
    const data = await index.search(`${searchTerm}`);
    setMovies(data.hits);
    console.log(data.hits);
    return data;
  };
  getData();
};

export default fetchData;
