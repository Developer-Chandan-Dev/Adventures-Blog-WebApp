import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, setLoading } from "../../store/features/categorySlice";
import SmallSpinner from "../utlity/SmallSpinner";

const NewCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/v1/category/add", {
        name: categoryName,
        description: description,
      });
      if (response.data) {
        dispatch(addCategory(response.data.newCategory));
        setCategoryName("");
        setDescription("");
        setError(null);
        dispatch(setLoading(false));
      } else {
        setError("Something went wrong please try again");
        dispatch(setLoading(false));
      }
    } catch (error) {
      if (error?.response?.data?.error) {
        setError(error.response.data.error);
        dispatch(setLoading(false));
      } else {
        setError("Something went wrong! Please try again");
        dispatch(setLoading(false));
      }
    }
  };

  const { categories, loading } = useSelector((state) => state.categories);
  console.log(categories);
  return (
    <>
      <form
        className="md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md h-[400px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Add New Category
        </h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
              error &&
              "outline-red-500 border border-red-500 focus:ring-red-200"
            }`}
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <span className="text-center text-red-400 mb-3 text-[12px] absolute left-0 top-[73px]">
            {error}
          </span>
        </div>
        <div className="relative mb-4">
          <label htmlFor="desc" className="leading-7 text-sm text-gray-600">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          {loading ? <SmallSpinner /> : "Add"}
        </button>
      </form>
    </>
  );
};

export default NewCategory;
