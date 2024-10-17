import { useState } from "react";

const SearchAndFilterPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState("title");
  return (
    <div className="">
      <input
        type="text"
        className="w-80 h-9 px-3 py-1 text-[15px] rounded-md border-2 outline-gray-300"
        placeholder={`Search by ${searchBy}`}
        value={searchTerm}
        // onChange={handleSearch}
      />
      <select
        name="searchBy"
        id="searchBy"
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
        className="w-32 text-sm border ml-2 border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 rounded-md pb-1"
      >
        <option value="title">Title</option>
        <option value="slug">Slug</option>
        <option value="status">Status</option>
        <option value="featuredBlog">Featured Blog</option>
        <option value="author">Author</option>
        <option value="publishedAt">Published Date</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};

export default SearchAndFilterPosts;
