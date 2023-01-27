import {  Payments } from "@/protocols";
import Joi from "joi";

const regex = /((0[1-9])|(1[0-2]))\/(\d{4})/

export const paymentsSchema = Joi.object<Payments>({
  ticketId: Joi.number().min(1).integer().required(),
    cardData: Joi.object({
        issuer: Joi.string().required(),
        number: Joi.number().required(),
        name: Joi.string().required(),
        expirationDate: Joi.string().regex(regex).required(),
        cvv: Joi.number().required()
    })
});

