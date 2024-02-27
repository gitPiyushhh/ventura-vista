const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(" ")[1]; // Bearer jndjndj

  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_KEY);

    if (!decodedToken) {
      req.isAuth = false;
      return next();
    }

    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    req.isAuth = false;
    return res.status(401).json({ error: "Unauthorized" });
  }
};
