/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import useHandleBlogForm from "../../hooks/useHandleBlogForm";
import authService from "../../features/auth";
import { useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import SmallSpinner from "../utlity/SmallSpinner";
import { useLocation, useNavigate } from "react-router-dom";

const Form = ({ method = "POST", heading, api, returnData = null }) => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const authUser = useSelector((state) => state.user.user);
  const { data } = useFetchData("/api/v1/category");
  const navigate = useNavigate();
  const location = useLocation();

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
      excerpt: "",
      coverImage: null,
      category: "",
      richTextContent: "",
    },
    method
  );

  // convert title in slug
  useEffect(() => {
    setFormData({
      ...formData,
      slug: formData.title && formData.title.toLowerCase().replaceAll(" ", "-"),
    });
  }, [formData.title]);

  const handleChange = (newContent) => {
    setContent(newContent);
  };

  //   feed jodit editor content in formData content
  useEffect(() => {
    setFormData({
      ...formData,
      richTextContent: content,
    });
  }, [content]);

  useEffect(() => {
    console.log(authUser._id);
    setFormData({
      ...formData,
      author: authUser._id,
    });
  }, []);

  // Logic for Fill fields automatic if user trying to updated post not a new post
  useEffect(() => {
    if (returnData !== null && method === "PUT") {
      setFormData({
        ...formData,
        author: returnData?.author?._id,
        title: returnData?.title,
        slug: returnData?.slug,
        category: returnData?.category,
        excerpt: returnData?.excerpt,
      });
      setContent(returnData.content);
    }
  }, [returnData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleSubmit(api);
    console.log(data);
    if (data.success === true) {
      console.log(data);
      setContent("");
      alert("Update successfully");
      const path = location.pathname.split("/update")[0];
      navigate(path);
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
          <h1 className="text-2xl font-semibold text-slate-700 pb-3 relative text-center drop-shadow">
            {heading} Blogs
          </h1>
          <div className="w-52 rounded-full h-1 bg-[#dc143cad]"></div>
          <div className="w-52 rounded-full h-1 bg-[#dc143cad] mt-1"></div>
          {/* <div className="w-48 mt-1 rounded-full h-1 bg-blue-100"></div> */}
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
          <label htmlFor="excerpt" className="font-semibold ml-1 text-base">
            Short Description
          </label>
          <textarea
            type="text"
            name="excerpt"
            id="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            className="w-full h-24 mt-2 px-3 py-2 outline-blue-300 border-2 rounded resize-none"
            placeholder="Enter Author name"
          />
        </div>
        <div className="w-full pb-5">
          <label className="font-semibold ml-1 text-base">Category</label>
          <div className="flex items-center mt-3 gap-x-4 flex-wrap gap-y-3 text-[14px]">
            {data && data.categories != null
              ? data.categories.map(({ name, _id }) => (
                  <div key={_id} className="flex items-center gap-x-2">
                    <label htmlFor={_id} className="font-normal ml-1 text-base">
                      {name}
                    </label>
                    <input
                      type="checkbox"
                      id={_id}
                      name="category"
                      value={_id}
                      className="w-4 cursor-pointer h-4"
                      checked={formData.category === _id}
                      onChange={handleCategoryChange}
                    />
                  </div>
                ))
              : ""}

            {/* <div className="flex items-center gap-x-2">
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
            </div> */}
          </div>
        </div>
        <div className="w-full pb-8">
          <label htmlFor="coverImage" className="font-semibold ml-1 text-base">
            Post Banner
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full h-10 mt-4 px-3 py-1 outline-green-300 border-2 rounded"
            id="coverImage"
            name="coverImage"
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
              {loading ? <SmallSpinner /> : "Update Post"}
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
                {loading ? <SmallSpinner /> : "Create Post"}
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
