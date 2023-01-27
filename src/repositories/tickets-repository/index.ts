import { prisma } from "@/config";
import { TicketType } from "@prisma/client";

export async function getTicketsTypes():Promise<TicketType[]> {
    return await prisma.ticketType.findMany();
}

const getTicketsTypesRepository = {
    getTicketsTypes
}

export default getTicketsTypesRepository




















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