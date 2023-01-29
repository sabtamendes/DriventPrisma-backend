import {  Payments } from "@/protocols";
import Joi from "joi";

export const paymentsSchema = Joi.object<Payments>({
  ticketId: Joi.number().min(1).integer().required(),
  cardData: Joi.object({
    issuer: Joi.string().required(),
    number: Joi.number().required(),
    name: Joi.string().required(),
    expirationDate: Joi.string().required(),
    cvv: Joi.number().required()
  })
});

