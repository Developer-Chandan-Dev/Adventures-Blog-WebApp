import axios from "axios";

const useUserControl = () => {
  const handleTeamMember = async (url) => {
    try {
      const response = await axios.patch(url);
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleTeamMember };
};

export default useUserControl;
