import { TicketTypeId } from "@/protocols";
import Joi from "joi";

export const ticketIdSchema = Joi.object<TicketTypeId>({
  ticketTypeId: Joi.number().strict().required().integer()
});

