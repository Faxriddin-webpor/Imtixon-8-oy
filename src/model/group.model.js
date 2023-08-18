import { newsequelize } from "../public/index.js";
import { Model, DataTypes } from "sequelize";

export class Group extends Model {}

Group.init(
  {
    group_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    group_name: {
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
    tableName: "groups",
    deletedAt: false,
    sequelize: newsequelize,
  }
);
