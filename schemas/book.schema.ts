import Joi from "joi";

export const createBookSchema = Joi.object({
  name: Joi.string().required(),
});


export const returnBookSchema = Joi.object({
  score: Joi.number()
    .min(0)
    .max(10)
    .required()
    .messages({
      'number.base': 'Score must be a number',
      'number.min': 'Score must be greater than or equal to 0',
      'number.max': 'Score must be less than or equal to 10',
      'any.required': 'Score is required',
    }),
});
