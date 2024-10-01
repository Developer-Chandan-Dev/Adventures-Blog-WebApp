const Comment = require("../models/comment.models");

const addComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const data = req.body;

    console.log(postId, data);
    res.send({ postId, data });
  } catch (error) {
    console.log("Error in addding comment", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteComment = async (req, res) => {
  try {
    const data = req.body;

    res.send(data);
  } catch (error) {
    console.log("Error in deleting comment", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addComment, deleteComment };
