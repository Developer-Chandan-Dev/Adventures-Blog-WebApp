import "./style.css";
import { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";

const AddBlogs = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setSlug(title && title.replaceAll(" ", "+"));
    console.log(slug);
  }, [slug, title]);

  console.log(title, slug, author);

  return (
    <section className="w-full">
      <div className="w-[1000px] h-auto py-5 mx-auto bg-white drop-shadow-xl rounded-lg mt-8 ">
        <form className="w-[95%] mx-auto px-3 py-8 text-[15px]">
          <div className="w-full pb-5">
            <label htmlFor="title" className="font-semibold ml-1 text-base">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
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
              name="authorName"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full h-10 mt-2 px-3 py-2 outline-blue-300 border-2 rounded"
              placeholder="Enter Author name"
            />
          </div>
          <div className="w-full pb-5">
            <label className="font-semibold ml-1 text-base">Category</label>
            <div className="flex items-center mt-3 gap-x-4 flex-wrap gap-y-3 text-[14px]">
              <div className="flex items-center gap-x-2">
                <label
                  htmlFor="Web Development"
                  className="font-normal ml-1 text-base"
                >
                  Web Development
                </label>
                <input
                  type="checkbox"
                  id="Web Development"
                  className="w-4 cursor-pointer h-4"
                />
              </div>
              <div className="flex items-center gap-x-2">
                <label
                  htmlFor="Cyber Security"
                  className="font-normal ml-1 text-base"
                >
                  Cyber Security
                </label>
                <input
                  type="checkbox"
                  id="Cyber Security"
                  className="w-4 cursor-pointer h-4"
                />
              </div>
              <div className="flex items-center gap-x-2">
                <label
                  htmlFor="App Development"
                  className="font-normal ml-1 text-base"
                >
                  App Development
                </label>
                <input
                  type="checkbox"
                  id="App Development"
                  className="w-4 cursor-pointer h-4"
                />
              </div>
            </div>
          </div>
          <div className="w-full pb-5">
            <h2 className="font-semibold ml-1 text-base ">Post Content</h2>
            {/* <textarea name="" placeholder="Enter your content here..." className="border-2 outline-yellow-300 px-3 py-3 mt-5 w-full h-72" id=""></textarea> */}
            <JoditEditor
              ref={editor}
              value={content}
              // tabIndex={1} // tabIndex of textarea
              // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
          <div className="w-full flex items-center gap-x-2 pl-1">
            <button className="px-4 py-[6px] bg-[crimson] text-white drop-shadow-lg transition-all border-2 border-[crimson] hover:bg-white hover:text-[crimson] rounded">
              Create Post
            </button>
            <button className="px-4 py-[6px] bg-[white] text-[crimson] drop-shadow-lg transition-all border-2 border-[crimson] hover:bg-[crimson] hover:text-white rounded">
              Reset Post
            </button>
          </div>
        </form>

        {/* {content} */}
      </div>
    </section>
  );
};

export default AddBlogs;
