import { Router } from "express";
import { REGISTER, GET, LOGIN } from "../controller/user.js";
import validate, { checkBody, checkToken } from "../middleware/middleware.js";
import { userJoi } from "../joi/joi.js";
import { upload } from "../multer/multer.js";

export const userRouter = Router();

userRouter.get("/users", checkToken, GET);
userRouter.post(
  "/register",
  checkBody,
  upload.single("img"),
  validate(userJoi),
  REGISTER
);
userRouter.post("/login", LOGIN);
