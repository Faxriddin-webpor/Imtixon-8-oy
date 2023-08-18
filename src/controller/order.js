import { Order } from "../model/index.js";

export const POST = async (req, res) => {
  try {
    const { user_id, channel_id, group_id } = req.body;
    const data = await Order.create({
      user_id,
      channel_id,
      group_id,
    });
    res.status(200).json({ status: 200, data });
  } catch (error) {
    console.log(error.message);
  }
};
