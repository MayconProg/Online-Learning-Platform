function roleAuth(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.userData.role)) {
      res.status(401).json({ message: "User Unauthorized!" });
    }

    next();
  };
}

export { roleAuth as roleAuthMiddleware };
