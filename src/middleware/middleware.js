import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../model/index.js";

export default (schema) => {
  return (req, res, next) => {
    try {
      const { error, values } = schema.validate(req.body);

      if (error) {
        return res.send({ message: error.message });
      }
      req.result = values;
      next();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const checkBody = async (req, res, next) => {
  const { username } = req.body;
  const data = await User.findAll();

  if (data.find((u) => u.username === username)) {
    return res.status(500).json({
      status: 500,
      error: "User already exists",
    });
  }
  return next();
};

export const checkToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const { username } = jwt.verify(token, process.env.PAROL);
    const data = await User.findAll();
    const filterUser = data.find((u) => u.username == username);
    if (!filterUser) {
      return res.status(404).json({
        status: 404,
        error: "User is not found !",
      });
    }
    return next();
  } catch (error) {
    console.log(error.message);
  }
};
