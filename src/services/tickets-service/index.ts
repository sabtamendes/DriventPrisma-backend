import getTicketsTypesRepository from "@/repositories/tickets-repository";
import { TicketType } from "@prisma/client";

async function ticketsTypes(): Promise<TicketType[]> {
    const data = await getTicketsTypesRepository.getTicketsTypes();

    return data;
}
//controller
const ticketsValidService = {
    ticketsTypes
}

export default ticketsValidService;