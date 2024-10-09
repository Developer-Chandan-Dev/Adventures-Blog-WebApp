import { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <>
      <form className="flex-center gap-x-1 mt-5 " onSubmit={handleSearch}>
        <input
          type="text"
          className="w-[500px] h-12 text-lg bg-white rounded-lg px-3 py-1 border border-orange-300 outline-orange-300 placeholder:text-orange-300 inputBox text-orange-400"
          placeholder="Search Blogs.."
          required
          name="query"
          id="searchText"
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          className="px-3 h-12 rounded-lg bg-orange-200 border border-orange-200 transition-all hover:bg-orange-300 text-white font-semibold py-1 inputBox"
          type="submit"
          disabled={!searchText}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBox;
