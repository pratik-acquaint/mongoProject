const Joi = require("joi");

const cartSchema = Joi.object({
  userId: Joi.string().required(),
  productId: Joi.string().required(),
});

const CartSoftdelete = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  cartSchema,
  CartSoftdelete,
};
