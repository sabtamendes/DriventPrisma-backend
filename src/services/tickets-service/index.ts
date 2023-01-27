import { notFoundError } from "@/errors";
import { TicketTypeAndTicket } from "@/protocols";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketsRepository from "@/repositories/tickets-repository";
import { TicketType } from "@prisma/client";

async function ticketsTypes(): Promise<TicketType[]> {
    const data = await ticketsRepository.getTicketsTypes();

    return data;
}

async function postTicket(userId: number, ticketTypeId: number): Promise<TicketTypeAndTicket> {
    const userEnrollment = await enrollmentRepository.findUserEnrollment(userId)
    if (!userEnrollment) throw notFoundError();
    const status = "RESERVED";
    return await ticketsRepository.createTicket(userEnrollment.id, ticketTypeId, status);

}

async function tickets(userId: number) {
    const data = await ticketsRepository.getTicketsByUserId(userId);
    return data;
}

const ticketsValidService = {
    ticketsTypes,
    postTicket,
    tickets
}

export default ticketsValidService;