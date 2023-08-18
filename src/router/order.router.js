import { Router } from "express";
import { POST } from "../controller/order.js";

export const orderRouter = Router();

orderRouter.post("/orders", POST);
