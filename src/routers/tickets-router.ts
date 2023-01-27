import { Router } from "express";
import { tickets, ticketsTypes, postTicket} from "@/controllers";
import { authenticateToken, validateBodySchema } from "@/middlewares";
import { ticketIdSchema } from "@/schemas/ticket-schemas";

const ticketsRouter = Router();

ticketsRouter
    .all("/*", authenticateToken)
    .get("/types", ticketsTypes)
    .get("/",tickets)
    .post("/", validateBodySchema(ticketIdSchema), postTicket)
export { ticketsRouter };