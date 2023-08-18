import { Router } from "express";
import { POST } from "../controller/group.js";
import validate, { checkToken } from "../middleware/middleware.js";
import {groupJoi} from "../joi/joi.js";
import { upload } from "../multer/multer.js";

export const groupRouter = Router();

groupRouter.post(
  "/group",
  upload.single("img"),
  validate(groupJoi),
  checkToken,
  POST
);
