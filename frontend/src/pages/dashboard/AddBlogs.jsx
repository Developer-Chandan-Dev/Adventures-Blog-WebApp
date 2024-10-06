import Form from "../../components/dashboard/Form";
import "./style.css";

const AddBlogs = () => {

  return (
    <section className="w-full">
      <div className="w-[96%] sm:w-11/12 h-auto py-5 mx-auto bg-white drop-shadow-xl rounded-lg mt-8 ">
        <Form method="POST" api="/api/v1/blogs/new-post" heading="Add New" />
      </div>
    </section>
  );
};

export default AddBlogs;
  