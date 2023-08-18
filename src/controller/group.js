import { Group, User } from "../model/index.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const POST = async (req, res) => {
  try {
    const { token } = req.headers;
    const { group_name } = req.body;
    const { filename } = req.file;
    const { username } = jwt.verify(token, process.env.PAROL);
    const users = await User.findAll();
    const filterUser = users.find((u) => u.username == username);

    const groups = await Group.create({
      group_name,
      user_id: filterUser.user_id,
      img: filename,
    });

    return res.status(200).json({
      status: 200,
      data: groups,
    });
  } catch (error) {
    console.log(error.message);
  }
};
