//import { TicketTypeAndTicket, TicketTypeId } from "@/protocols";
import ticketsRepository from "@/repositories/tickets-repository";
import { TicketType } from "@prisma/client";

async function ticketsTypes(): Promise<TicketType[]> {
    const data = await ticketsRepository.getTicketsTypes();

    return data;
}

// async function postTickets(params: TicketTypeId):Promise<TicketTypeAndTicket>{
//   await ticketsRepository.createTicketsTypesById(params);
//     return
// }
//controller

async function tickets(userId: number){
const data = await ticketsRepository.getTicketsByUserId(userId);
return data;
}
const ticketsValidService = {
    ticketsTypes,
    //postTickets,
    tickets
}

export default ticketsValidService;