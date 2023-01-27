import { Router } from "express";
import { tickets, ticketsTypes, /*postTickets*/} from "@/controllers";
import { authenticateToken,/* validateBodySchema*/ } from "@/middlewares";
//import { ticketIdSchema } from "@/schemas/ticket-schemas";

const ticketsRouter = Router();

ticketsRouter
    .all("/*", authenticateToken)
    .get("/types", ticketsTypes)
    .get("/",tickets)
    //.post("/", validateBodySchema(ticketIdSchema), postTickets)
export { ticketsRouter };