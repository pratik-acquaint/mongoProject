const Joi = require("joi");

const ProductSchema = Joi.object({
  name: Joi.string().required(),
  productImage: Joi.string().required(),
  type: Joi.string().required(),
  exipyDate: Joi.string().required(),
});

module.exports = { ProductSchema };
