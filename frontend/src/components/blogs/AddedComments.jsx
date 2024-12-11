import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  fetchComments,
} from "../../store/features/commentSlice";
import Spinner from "../utlity/Spinner";
import Empty from "../utlity/Empty";
import userIcon from "../../assets/images/consultant.png";

const AddedComments = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments, loading } = useSelector((state) => state.comments);

  console.log(comments);
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  const handleDelete = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  return (
    <>
      {loading && <Spinner />}
      {comments && Array.isArray(comments) && comments.length > 0
        ? comments?.map(({ content, _id, userId }, index) => (
            <div key={index} className="w-96 h-auto border p-4 rounded shadow mb-2">
              <p className="ml-2">{content}</p>
              <div className="flex items-center justify-between gap-x-2 mt-5">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full border object-fill overflow-hidden">
                    <img
                      src={userId?.profilePic ? userId?.profilePic : userIcon}
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <small className="ml-2">{userId?.username}</small>
                </div>
                <div>
                  <span>Like</span>
                </div>
              </div>
            </div>
          ))
        : !loading && <Empty boxHeight="100px" imgWidth="100px" />}
    </>
  );
};

export default AddedComments;
