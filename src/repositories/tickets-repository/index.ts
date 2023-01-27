import { prisma } from "@/config";
import { TicketTypeAndTicket } from "@/protocols";
//import { TicketTypeAndTicket, TicketTypeId} from "@/protocols";
import { /*Prisma*/Prisma, TicketType } from "@prisma/client";

export async function getTicketsTypes(): Promise<TicketType[]> {
    return await prisma.ticketType.findMany();
}

// export async function createTicketsTypesById(data: TicketTypeId):Promise<TicketTypeAndTicket>{
//   return await prisma.ticket.create({})
// }

export async function getTicketsByUserId(userId: number): Promise<TicketTypeAndTicket> {
    return await prisma.ticket.findFirst({ where: { Enrollment: { userId } }, include: { TicketType: true } })
}
const ticketsRepository = {
    getTicketsTypes,
    //createTicketsTypesById,
    getTicketsByUserId
}

export default ticketsRepository




















// export async function findTicketTypeId(tickets: TicketTypeId) {
//     const type = prisma.ticketType.findFirst({ where: tickets });
//     const ticket = prisma.ticket.findFirst({ where: tickets });
//     return {
//         ticket,
//         type
//     }
// }







export async function findTicket(id: number) {
    return prisma.ticket.findMany({ where: { id } })


    // const ticket = prisma.ticket.findFirst({ where: userId });
    // return {
    //     ticket,
    //     type
    // }
}