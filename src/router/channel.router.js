import { Router } from "express";
import { POST } from "../controller/channel.js";
import validate, { checkToken } from "../middleware/middleware.js";
import { channelJoi } from "../joi/joi.js";
import { upload } from "../multer/multer.js";

export const channelRouter = Router();

channelRouter.post(
  "/channel",
  upload.single("img"),
  validate(channelJoi),
  checkToken,
  POST
);
