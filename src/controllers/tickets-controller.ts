import { AuthenticatedRequest } from "@/middlewares";
import ticketsValidService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function ticketsTypes(req: AuthenticatedRequest, res: Response) {
    try {
        const types = await ticketsValidService.ticketsTypes()
        if (types) {
            return res.status(httpStatus.OK).send(types);
        }
        return res.send(types);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send({});
    }
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
    const ticketTypeId = req.body.ticketTypeId as number;
    const userId = req.userId;
    try {
        const data = await ticketsValidService.postTicket(userId, ticketTypeId);

        res.status(httpStatus.CREATED).send(data);

    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function tickets(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId;
    try {
        const data = await ticketsValidService.tickets(userId);

        return res.status(httpStatus.OK).send(data);

    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.send(httpStatus.BAD_REQUEST).send({});
    }
}
