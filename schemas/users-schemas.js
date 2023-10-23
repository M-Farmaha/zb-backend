import Joi from "joi";

export const usersRegisterSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required {#key} field",
});

export const usersLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required {#key} field",
});
