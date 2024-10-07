import axios from "axios";

const useUpdateFeaturedPostAndStatus = () => {
  const handleSubmit = async (url) => {
    try {
      const response = await axios.patch(url);
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleSubmit };
};

export default useUpdateFeaturedPostAndStatus;
