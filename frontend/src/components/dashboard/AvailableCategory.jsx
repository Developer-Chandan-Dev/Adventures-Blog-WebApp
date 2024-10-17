import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../utlity/Spinner";
import CategoryBox from "./CategoryBox";
import {
  setCategories,
  setLoading,
  setError,
  deleteCategory,
} from "../../store/features/categorySlice";
import axios from "axios";

const AvailableCategory = () => {
  const dispatch = useDispatch();
  const { data = [], error, loading } = useFetchData("/api/v1/category/");

  useEffect(() => {
    loading ? dispatch(setLoading(true)) : dispatch(setLoading(false)); // Toggle loading true or false
    data && dispatch(setCategories(data && data.categories)); // Dispatch the fetched data to Redux
    error && dispatch(setError(error)); // Dispatch error to Redux if any
  }, [data, dispatch, error, loading]);

  const { categories } = useSelector((state) => state.categories);

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`/api/v1/category/${id}`);
      dispatch(deleteCategory(id));
      console.log("Category deleted successfully");
    } catch (error) {
      console.error("Errror deleting category", error);
    }
  };



  return (
    <>
      <div className="w-[600px]">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Available Categories
        </h2>
        <div className="lg:w-4/5 sm:mb-2 -mx-2">
          {error && <p>{error}</p>}
          {loading && (
            <div className="w-full h-52 flex-center">
              <Spinner />
            </div>
          )}
          {data &&
          Array.isArray(categories) &&
          categories.length > 0 &&
          categories !== null
            ? categories.map((element, index) => (
                <CategoryBox
                  key={index}
                  _id={element?._id}
                  name={element?.name}
                  status={element?.active}
                  setOnHome={element?.setOnHome}
                  description={element?.description}
                  onDelete={handleDeleteCategory}
                />
              ))
            : "Categories not found"}
        </div>
      </div>
    </>
  );
};

export default AvailableCategory;
