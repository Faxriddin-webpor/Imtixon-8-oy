import { newsequelize } from "../public/index.js";
import { Model, DataTypes } from "sequelize";

export class Channel extends Model {}

Channel.init(
  {
    channel_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    channel_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "channels",
    deletedAt: false,
    sequelize: newsequelize,
  }
);
