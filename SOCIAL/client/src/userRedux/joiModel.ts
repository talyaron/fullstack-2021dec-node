import Joi from 'joi'

export const UserValidation = Joi.object({
  // username: Joi.string().allow(null, ""),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});