/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useHandlePostRequest from "../../hooks/useHandlePostRequest";
import SmallSpinner from "../utlity/SmallSpinner";

const CommentForm = ({ postId }) => {

  const authUser = useSelector((state) => state.user.user);
  const { loading, error, formData, handleChange, handleSubmit } =
    useHandlePostRequest(
      { postId: postId, userId: authUser?._id, content: "" },
      "POST"
    );


  const handleAddComment = async (e) => {
    e.preventDefault();

    const data = await handleSubmit(`/api/v1/comments/${postId}`);
    if(data.success === true){
      console.log(data.comment);
    }else{
      console.log(data);
    }

  };
  // route /api/v1/comments/:postId
  return (
    <div className="py-5 px-2 w-[600px]">
      <form className=" w-[500px] py-5" onSubmit={handleAddComment}>
        <h2 className="py-8 text-2xl font-semibold pl-3 relative after:absolute after:w-[6px] after:h-8 after:bg-red-200 after:left-0">
          Add Comment
        </h2>
        <div className="w-full mt-4">
          <textarea
            type="text"
            placeholder="Comment..."
            className="w-full h-40 px-3 py-2 resize-none rounded-md border border-slate-300 outline-slate-300"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-red-500 drop-shadow">{error}</p>}
        <button className="px-4 py-2 border border-slate-300 transition-all hover:bg-slate-50 rounded-md flex items-center gap-x-2 mt-3">
          {loading ? (
            <SmallSpinner />
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send fill-slate-700"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
              <span className="font-semibold text-slate-700">SEND</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
