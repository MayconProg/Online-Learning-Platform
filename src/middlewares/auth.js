import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token is Missing!" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token!" });
    }

    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Invalid Token!" });
  }
};

export { auth as authMiddleware };
