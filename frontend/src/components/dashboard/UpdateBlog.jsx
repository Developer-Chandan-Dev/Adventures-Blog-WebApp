/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import useFetchData from "../../hooks/useFetchData";

const UpdateBlogs = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetchData(`/api/v1/blogs/byId/${id}`);
  console.log(data, error, loading);

  console.log(id);
  return (
    <section className="w-full">
      <div className="w-[96%] sm:w-full h-auto py-5 mx-auto bg-white drop-shadow-xl rounded-lg mt-8 ">
        <Link to="/dashboard/blogs">
          <button>Go Back</button>
        </Link>
        <Form
          method="PUT"
          heading="Update"
          api={`/api/v1/blogs/${id}`}
          returnData={data && data.post != null ? data.post : ""}
        />
      </div>
    </section>
  );
};

export default UpdateBlogs;
