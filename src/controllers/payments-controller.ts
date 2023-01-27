import { AuthenticatedRequest } from "@/middlewares";
import { CardData, TicketId } from "@/protocols";
import paymentsService from "@/services/payments-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function postPayments(req: AuthenticatedRequest, res: Response) {
    const { ticketId } = req.body as TicketId;
    const { cardData } = req.body as CardData;
    const userId = req.userId;

    const data = {
        ticketId, cardData
    }
    try {
        const payment = await paymentsService.postPayments(data, userId);

        return res.status(httpStatus.CREATED).send(payment);

    } catch (error) {
        if (error.name === "UnauthorizedError") {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}
