import { newsequelize } from "../public/index.js";
import { Model, DataTypes } from "sequelize";

export class Order extends Model {}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: "orders",
    deletedAt: false,
    sequelize: newsequelize,
  }
);
