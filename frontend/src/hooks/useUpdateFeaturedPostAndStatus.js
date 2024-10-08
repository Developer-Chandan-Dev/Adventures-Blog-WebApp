import axios from "axios";

const useUpdateFeaturedPostAndStatus = () => {
  const handleChangeTrueFalse = async (url) => {
    try {
      const response = await axios.patch(url);
      const data = response.data;
      console.log(data.message);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleLitleFetchChange = async (url, option) => {
    try {
      console.log(url, option);
      const response = await axios.patch(url, option);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return { handleChangeTrueFalse, handleLitleFetchChange };
};

export default useUpdateFeaturedPostAndStatus;
