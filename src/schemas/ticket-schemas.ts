import Joi from "joi";

export const ticketIdSchema = Joi.object({
  ticketTypeId: Joi.number().required(),
});