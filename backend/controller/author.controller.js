const addAuthor = async (req, res) => {
  try {
    
  } catch (error) {
    console.log("Error in author creation", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
