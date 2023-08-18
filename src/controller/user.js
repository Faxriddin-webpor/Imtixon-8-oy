import { Channel, Group, User } from "../model/index.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const GET = async (req, res) => {
  try {
    const data = await User.findAll({ include: [Group, Channel] });
    res.status(200).json({ status: 200, data });
  } catch (error) {
    console.log(error.message);
  }
};

export const REGISTER = async (req, res) => {
  try {
    const { username, first_name } = req.body;
    const { filename } = req.file;
    const token = jwt.sign({ username }, process.env.PAROL);

    await User.create({
      username,
      first_name,
      img: filename,
    });

    return res.status(200).json({
      status: 200,
      message: "User qo'shildi !",
      token,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const LOGIN = async (req, res) => {
  try {
    const { username } = req.body;
    const data = await User.findAll();
    const filterUser = data.find((u) => u.username == username);
    const token = jwt.sign(
      { username: filterUser.username },
      process.env.PAROL
    );
    if (!filterUser) {
      return res.status(404).json({
        status: 404,
        error: "User is not found !",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "User topildi !",
      token,
    });
  } catch (error) {
    console.log(error.message);
  }
};
