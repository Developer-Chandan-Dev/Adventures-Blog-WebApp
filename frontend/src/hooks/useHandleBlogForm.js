/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const useHandleBlogForm = (initialState, method) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    ``;
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      banner: e.target.files[0],
    }));
  };

  const handleCategoryChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleSubmit = async (url) => {
    setLoading(true);
    setError(null);

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      console.log(formData);
      console.log(method, initialState, url);
      // Log the FormData to see the contents
      for (const [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await axios({
        method: method, // 'POST' OR 'PUT'
        url: url, // The API endpoint
        data: formDataToSend, // Add your headers here
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      setFormData(initialState);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    alert("Form reseted successfully");
  };

  return {
    handleInputChange,
    handleFileChange,
    handleCategoryChange,
    handleSubmit,
    handleReset,
    loading,
    setLoading,
    error,
    setError,
    formData,
    setFormData,
  };
};

export default useHandleBlogForm;
