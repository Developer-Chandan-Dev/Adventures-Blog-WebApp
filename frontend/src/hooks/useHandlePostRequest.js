import axios from "axios";
import { useState } from "react";

const useHandlePostRequest = (initialState, method) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (url) => {
    setLoading(true);
    setError(null);

    console.log(formData);
    try {
      const response = await axios({
        method: method, // 'POST' or 'PUT'
        url: url, // The API endpoint
        data: formData, //
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      setFormData(initialState);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response?.data?.error || "Something went wrong");
      return null;
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    // toast.success("Form reseted successfully");
  };

  return {
    loading,
    setLoading,
    error,
    setError,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useHandlePostRequest;
