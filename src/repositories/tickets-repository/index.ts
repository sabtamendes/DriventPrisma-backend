import { prisma } from "@/config";
import { TicketTypeAndTicket } from "@/protocols";
import { TicketStatus, TicketType } from "@prisma/client";

export async function getTicketsTypes(): Promise<TicketType[]> {
    return await prisma.ticketType.findMany();
}

export async function getTicketsByUserId(userId: number): Promise<TicketTypeAndTicket> {
    return await prisma.ticket.findFirst({ where: { Enrollment: { userId } }, include: { TicketType: true } });
}

export async function createTicket(enrollmentId: number, ticketTypeId: number, status: TicketStatus) {
    return await prisma.ticket.create({
        data: { enrollmentId, ticketTypeId, status },
        select:
        {
            id: true,
            status: true,
            ticketTypeId: true,
            enrollmentId: true,
            TicketType: true,
            createdAt: true,
            updatedAt: true,
        }
    });
}

const ticketsRepository = {
    getTicketsTypes,
    createTicket,
    getTicketsByUserId
}

export default ticketsRepository;
