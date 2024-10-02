const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    console.log(req.user.role);
    next();
  } else {
    return res
      .status(401)
      .json({
        success: false,
        error: "Unauthorized - Access denied: Admin only",
      });
  }
};

const isAuthor = (req, res, next) => {
  if ((req.user && req.user.role === "admin") || req.user.role === "author") {
    console.log(req.user.role);
    next();
  } else {
    return res
      .status(401)
      .json({
        success: false,
        error: "Unauthorized - Access denied: Admin & Author only",
      });
  }
};

module.exports = { isAdmin, isAuthor };
