import Joi from "joi";

export const userJoi = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  first_name: Joi.string().min(3).max(50).required(),
});

export const channelJoi = Joi.object({
  channel_name: Joi.string().min(3).max(30).required(),
});

export const groupJoi = Joi.object({
  group_name: Joi.string().min(3).max(30).required(),
});
