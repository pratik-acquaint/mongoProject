const Joi = require("joi");

const ProductSchema = Joi.object({
  name: Joi.string().required(),
  productImage: Joi.string().required(),
  type: Joi.string().required(),
  price: Joi.number().required(),
  exipyDate: Joi.string().required(),
  weight: Joi.number().required(),
});

const updateSchema = Joi.object({
  id: Joi.string().required(),
  type: Joi.string().optional(),
  price: Joi.number().optional(),
});

module.exports = { ProductSchema, updateSchema };
