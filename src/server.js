import express from "express";
import path from "path";
import "dotenv/config";
import { userRouter } from "./router/user.router.js";
import { orderRouter } from "./router/order.router.js";
import { groupRouter } from "./router/group.router.js";
import { channelRouter } from "./router/channel.router.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "uploads")));

app.use(userRouter, groupRouter, orderRouter, channelRouter);

app.use("/*", (req, res) => {
  res.status(404).json({
    error: req.baseUrl + " is not found !",
    status: 404,
  });
});

app.listen(PORT, console.log("Server is running on port - " + PORT));
