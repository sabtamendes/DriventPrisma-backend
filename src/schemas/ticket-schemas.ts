import { TicketTypeId } from "@/protocols";
import Joi from "joi";

export const ticketIdSchema = Joi.object<TicketTypeId>({
  ticketTypeId: Joi.number().required().integer()
});

