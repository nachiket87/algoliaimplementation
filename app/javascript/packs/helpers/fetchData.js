const algoliasearch = require("algoliasearch");
const client = algoliasearch("6XU8A3UQ7F", "c82364b5d1d8961392c091ead329f573");
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
