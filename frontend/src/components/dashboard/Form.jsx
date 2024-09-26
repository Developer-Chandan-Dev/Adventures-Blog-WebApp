/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import useHandleBlogForm from "../../hooks/useHandleBlogForm";

const Form = ({ method = "POST", heading, api }) => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const {
    handleInputChange,
    handleFileChange,
    handleCategoryChange,
    loading,
    setLoading,
    error,
    handleSubmit,
    handleReset,
    formData,
    setFormData,
  } = useHandleBlogForm(
    {
      title: "",
      slug: "",
      author: "",
      banner: null,
      category: "",
      richContent: "",
    },
    method
  );

  //   convert title in slug
  useEffect(() => {
    setFormData({
      ...formData,
      slug: formData.title && formData.title.toLowerCase().replaceAll(" ", "-"),
    });
  }, [formData.title]);

  const handleChange = (newContent) => {
    setContent(newContent);
  };

  //   feed jodit editor content in formData richContent
  useEffect(() => {
    setFormData({
      ...formData,
      richContent: content,
    });
  }, [content]);

  console.log(formData);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleSubmit(api);
    if (data) {
      alert(data.message);
      // Handle success (e.g., rest form, show success message)
    }
  };

  return (
    <>
      <form
        className="w-[95%] mx-auto px-3 py-8 text-[15px]"
        onSubmit={onSubmit}
      >
        <div className="flex items-center justify-center flex-col mb-10">
          <h1 className="text-xl font-semibold text-slate-700 pb-3 relative text-center drop-shadow">
            {heading} Blogs
          </h1>
          <div className="w-48 rounded-full h-1 bg-red-100"></div>
          <div className="w-48 mt-1 rounded-full h-1 bg-blue-100"></div>
        </div>
        <div className="w-full pb-5">
          <label htmlFor="title" className="font-semibold ml-1 text-base">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full h-10 mt-2 px-3 py-2 outline-red-300 border-2 rounded"
            placeholder="Enter post title"
          />
        </div>
        <div className="w-full pb-5">
          <label htmlFor="slug" className="font-semibold ml-1 text-base">
            Post Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            readOnly
            onChange={handleInputChange}
            className="w-full h-10 mt-2 px-3 py-2 outline-green-300 border-2 rounded"
            placeholder="Enter post slug"
          />
        </div>

        <div className="w-full pb-5">
          <label htmlFor="author" className="font-semibold ml-1 text-base">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full h-10 mt-2 px-3 py-2 outline-blue-300 border-2 rounded"
            placeholder="Enter Author name"
          />
        </div>
        <div className="w-full pb-5">
          <label className="font-semibold ml-1 text-base">Category</label>
          <div className="flex items-center mt-3 gap-x-4 flex-wrap gap-y-3 text-[14px]">
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="web-development"
                className="font-normal ml-1 text-base"
              >
                Web Development
              </label>
              <input
                type="checkbox"
                id="web-development"
                name="category"
                value="Web Development"
                className="w-4 cursor-pointer h-4"
                checked={formData.category === "Web Development"}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="cyber-security"
                className="font-normal ml-1 text-base"
              >
                Cyber Security
              </label>
              <input
                type="checkbox"
                id="cyber-security"
                name="category"
                value="Cyber Security"
                className="w-4 cursor-pointer h-4"
                checked={formData.category === "Cyber Security"}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full pb-8">
          <label htmlFor="banner" className="font-semibold ml-1 text-base">
            Post Banner
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full h-10 mt-4 px-3 py-1 outline-green-300 border-2 rounded"
            id="banner"
            name="banner"
          />
        </div>
        <div className="w-full pb-5">
          <h2 className="font-semibold ml-1 text-base ">Post Content</h2>
          {/* <textarea name="" placeholder="Enter your content here..." className="border-2 outline-yellow-300 px-3 py-3 mt-5 w-full h-72" id=""></textarea> */}
          <JoditEditor ref={editor} value={content} onChange={handleChange} />
        </div>

        <div className="w-full flex items-center gap-x-2 pl-1">
          {method === "PUT" && (
            <button
              className="px-4 py-[6px] bg-[crimson] text-white drop-shadow-lg transition-all border-2 border-[crimson] hover:bg-white hover:text-[crimson] rounded"
              name="submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Updating Post" : "Update Post"}
            </button>
          )}

          {method === "POST" && (
            <>
              <button
                className="px-4 py-[6px] bg-[crimson] text-white drop-shadow-lg transition-all border-2 border-[crimson] hover:bg-white hover:text-[crimson] rounded"
                name="submit"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating Post" : "Create Post"}
              </button>
              <button
                className="px-4 py-[6px] bg-[white] text-[crimson] drop-shadow-lg transition-all border-2 border-[crimson] hover:bg-[crimson] hover:text-white rounded"
                name="reset"
                type="reset"
                onClick={handleReset}
                disabled={loading}
              >
                Reset Post
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
