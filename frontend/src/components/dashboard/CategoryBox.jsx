import { useState } from "react";
import UpdateCategoryForm from "./category/UpdateCategoryForm";
import PropTypes from 'prop-types'

const CategoryBox = ({
  name,
  _id,
  status,
  setOnHome,
  description,
  onDelete,
}) => {
  const [active, setActive] = useState(false);
  const [editActive, setEditActive] = useState(false);

  const handleActiveChange = async () => {
    setActive((prev) => !prev); // Toggel between true and false
  };

  return (
    <>
      <div className={`p-2 w-full h-16 ${editActive === true && "h-auto"} `}>
        <div className="bg-white shadow rounded flex p-4 h-full items-center justify-between">
          <div className="flex items-center ">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 cursor-pointer"
              viewBox="0 0 24 24"
              onClick={handleActiveChange}
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              {setOnHome === true && <path d="M22 4L12 14.01l-3-3"></path>}
            </svg>
            <span className="title-font font-medium">{name}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3 opacity-50 hover:opacity-100 cursor-pointer fill-indigo-500"
              viewBox="0 0 16 16"
              onClick={() => onDelete(_id)}
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              fill="currentColor"
              onClick={() => setEditActive((prev) => !prev)}
              className="opacity-80 hover:opacity-100 cursor-pointer fill-indigo-500"
            >
              <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
            </svg>
          </div>
        </div>

        {editActive && (
          <UpdateCategoryForm
            name={name}
            _id={_id}
            description={description}
            setEditActive={setEditActive}
          />
        )}
      </div>
    </>
  );
};

export default CategoryBox;

CategoryBox.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
  setOnHome: PropTypes.bool,
  description: PropTypes.string,
  onDelete: PropTypes.func,
}