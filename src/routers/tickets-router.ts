import { Router } from "express";
import { ticketsTypes, /*postTickets*/ } from "@/controllers";
import { authenticateToken, validateBodySchema } from "@/middlewares";
import { ticketIdSchema } from "@/schemas/ticket-schemas";

const ticketsRouter = Router();

ticketsRouter
    .all("/*", authenticateToken)
    .get("/types", ticketsTypes)
    .post("/", validateBodySchema(ticketIdSchema), /*postTickets*/)
export { ticketsRouter };