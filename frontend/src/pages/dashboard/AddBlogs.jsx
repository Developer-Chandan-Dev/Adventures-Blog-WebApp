import Form from "../../components/dashboard/Form";
import "./style.css";

const AddBlogs = () => {

  return (
    <section className="max-w-7xl mx-auto pt-6 px-6 lg:px-8 xl:px-20">
      <div className="h-auto py-5 mx-auto bg-white drop-shadow-xl rounded-lg mt-8 ">
        <Form method="POST" api="/api/v1/blogs/new-post" heading="Add New" />
      </div>
    </section>
  );
};

export default AddBlogs;
  