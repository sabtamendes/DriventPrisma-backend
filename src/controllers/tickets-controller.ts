import { AuthenticatedRequest } from "@/middlewares";
// import { TicketTypeId } from "@/protocols";
import { findTicket } from "@/repositories/tickets-repository";
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

export async function getTickets(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    try {
        const data = await findTicket(userId);
        console.log(data.map(item => item), "data")
        // return res.status(httpStatus.CREATED).send({
        //     id: (await data.ticket).id,
        //     status: (await data.ticket).status,
        //     ticketTypeId: (await data.ticket).ticketTypeId,
        //     enrollmentId: (await data.ticket).enrollmentId,
        //     ticketType: {
        //         TicketType: {
        //             id: (await data.type).id,
        //             name: (await data.type).name,
        //             price: (await data.type).price,
        //             isRemote: (await data.type).isRemote,
        //             includesHotel: (await data.type).includesHotel,
        //             createdAt: (await data.type).createdAt,
        //             updatedAt: (await data.type).updatedAt,
        //         },
        //         createdAt: (await data.ticket).createdAt,
        //         updatedAt: (await data.ticket).updatedAt,
        //     }
        // });
        return res.status(httpStatus.OK).send(data.map(item => item));
    } catch (error) {
        return res.send(httpStatus.NOT_FOUND).send({});
    }
}

// export async function postTickets(req: AuthenticatedRequest, res: Response) {
//     const ticketTypeId = req.body as TicketTypeId;

//     try {
//         const data = await findTicketTypeId(ticketTypeId);

//         return res.status(httpStatus.CREATED).send({
//             id: (await data.ticket).id,
//             status: (await data.ticket).status,
//             ticketTypeId: (await data.ticket).ticketTypeId,
//             enrollmentId: (await data.ticket).enrollmentId,
//             ticketType: {
//                 TicketType: {
//                     id: (await data.type).id,
//                     name: (await data.type).name,
//                     price: (await data.type).price,
//                     isRemote: (await data.type).isRemote,
//                     includesHotel: (await data.type).includesHotel,
//                     createdAt: (await data.type).createdAt,
//                     updatedAt: (await data.type).updatedAt,
//                 },
//                 createdAt: (await data.ticket).createdAt,
//                 updatedAt: (await data.ticket).updatedAt,
//             }
//         });

//     } catch (error) {
//         return res.sendStatus(httpStatus.BAD_REQUEST);
//     }
// }
