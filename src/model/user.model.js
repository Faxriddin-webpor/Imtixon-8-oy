import { newsequelize } from "../public/index.js";
import { Model, DataTypes } from "sequelize";

export class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    deletedAt: false,
    sequelize: newsequelize,
  }
);
