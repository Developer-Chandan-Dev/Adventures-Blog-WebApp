import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDataWithPagination = (
  url,
  currentPage,
  itemsPerPage,
  searchTerm
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            search: searchTerm,
          },
        }); // Waiting for get requests
        const resData = response.data;

        setData(resData); // Set fetched data in state
        setLoading(false);
        setError(null);
      } catch (error) {
        if (error.message === "Request failed with status code 404") {
          setError(error.message);
          setLoading(false);
          setData(null);
        }
        console.error(error.response.data.error);
        setError(error.response.data.error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, searchTerm, url]);

  return { data, error, loading, setLoading, setData, setError };
};

export default useFetchDataWithPagination;
