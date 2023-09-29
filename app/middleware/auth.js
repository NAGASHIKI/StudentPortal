const express = require("express");
const { verifyJWTToken } = require("../utils/helper");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";
  console.log(verifyJWTToken(token));

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  } else {
    if (!verifyJWTToken(token)) {
      return res.status(401).send({ message: "Unauthorized" });
    } else {
      next();
    }
  }
};

module.exports = {
  authMiddleware,
};
