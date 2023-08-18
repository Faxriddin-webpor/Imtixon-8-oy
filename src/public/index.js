import { Sequelize } from "sequelize";

export const newsequelize = new Sequelize(
  "postgres://postgres:1234@localhost:5432/exam",
  { logging: false }
);

try {
  await newsequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
