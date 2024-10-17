import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateCategory } from "../../../store/features/categorySlice";
import SmallSpinner from "../../utlity/SmallSpinner";

const UpdateCategoryForm = ({
  _id,
  name = "category name",
  description = "category description",
  setEditActive = { setEditActive },
}) => {
  const [newName, setNewName] = useState(name);
  const [newDesc, setNewDesc] = useState(description);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
    console.log(newDesc, newName);
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`/api/v1/category/${_id}`, {
        name: newName,
        description: newDesc,
      });

      console.log(response.data);
      if (response.data) {
        dispatch(updateCategory({ _id, data: response.data }));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error updating category", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      className="bg-white text-sm shadow rounded flex p-4 h-full items-center justify-between flex-col gap-y-2"
      onSubmit={handleUpdateCategory}
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full px-2 py-1  outline-slate-300 border rounded-md"
        required
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Desc.."
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
        className="w-full h-16 resize-none px-2 py-1 bg-white drop-shadow-sm outline-slate-300 border rounded-md"
      />
      <div className="flex items-center justify-start w-full gap-x-2">
        <button
          className="px-3 py-1 rounded-md border bg-slate-100"
          type="submit"
        >
          {loading ? <SmallSpinner /> : "Update"}
        </button>
        <button
          className="px-3 py-1 rounded-md border bg-slate-100"
          type="button"
          onClick={() => setEditActive(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateCategoryForm;

UpdateCategoryForm.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  setEditActive: PropTypes.func,
};
