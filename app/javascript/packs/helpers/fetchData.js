import axios from "axios";

const fetchData = (searchTerm, setMovies) => {
  const getData = async () => {
    const data = await axios.get(`/api/v1/movies`, {
      params: { title: `${searchTerm}` },
    });
    setMovies(data.data);
    return data;
  };
  getData();
};

export default fetchData;
