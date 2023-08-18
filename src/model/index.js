import { User } from "./user.model.js";
import { Order } from "./order.model.js";
import { Channel } from "./channel.model.js";
import { Group } from "./group.model.js";

User.belongsToMany(Channel, { through: Order, foreignKey: "user_id" });
Channel.belongsToMany(User, { through: Order, foreignKey: "channel_id" });
User.belongsToMany(Group, { through: Order, foreignKey: "user_id" });
Group.belongsToMany(User, { through: Order, foreignKey: "group_id" });

await User.sync({ alter: true });
await Channel.sync({ alter: true });
await Order.sync({ alter: true });
await Group.sync({ alter: true });

export { User, Group, Order, Channel };
