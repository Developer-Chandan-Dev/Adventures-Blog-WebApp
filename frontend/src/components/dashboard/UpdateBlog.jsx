import { Link } from "react-router-dom";
import Form from "./Form";

const UpdateBlogs = () => {
  return (
    <section className="w-full">
      <div className="w-[96%] sm:w-full h-auto py-5 mx-auto bg-white drop-shadow-xl rounded-lg mt-8 ">
        {/* <Link to="/dashboard/blogs">
          <button>Go Back</button>
        </Link> */}
        <Form method="PUT" heading="Update" />
      </div>
    </section>
  );
};

export default UpdateBlogs;
