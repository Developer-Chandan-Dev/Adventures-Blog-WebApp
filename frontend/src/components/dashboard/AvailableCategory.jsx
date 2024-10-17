import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../utlity/Spinner";
import CategoryBox from "./CategoryBox";
import {
  setCategories,
  setLoading,
  setError,
} from "../../store/features/categorySlice";

const AvailableCategory = () => {
  const dispatch = useDispatch();
  const { data = [], error, loading } = useFetchData("/api/v1/category/");

  useEffect(() => {
    if (loading) {
      dispatch(setLoading(true)); // Set loading to true in Redux
    } else {
      dispatch(setLoading(false)); // Set loading to false in Redux
    }

    if (data) {
      dispatch(setCategories(data && data.categories)); // Dispatch the fetched data to Redux
    }

    if (error) {
      dispatch(setError(error)); // Dispatch error to Redux if any
    }
  }, [data, dispatch, error, loading]);

  const { categories } = useSelector((state) => state.categories);
  console.log(categories);

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
                />
              ))
            : "Categories not found"}
        </div>
      </div>
    </>
  );
};

export default AvailableCategory;
