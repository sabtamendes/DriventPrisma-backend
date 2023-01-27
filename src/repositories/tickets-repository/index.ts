import { prisma } from "@/config";
import { TicketTypeAndTicket } from "@/protocols";
import { TicketStatus, TicketType } from "@prisma/client";

async function getTicketsTypes(): Promise<TicketType[]> {
    return await prisma.ticketType.findMany();
}

async function getTicketsByUserId(userId: number): Promise<TicketTypeAndTicket> {
    return await prisma.ticket.findFirst({ where: { Enrollment: { userId } }, include: { TicketType: true } });
}

async function createTicket(enrollmentId: number, ticketTypeId: number, status: TicketStatus) {
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

async function findTicket(id: number) {
    return await prisma.ticket.findFirst({ where: { id }, include: { Enrollment: true, TicketType: true } });
}

async function updateTicketStatus(ticketId: number) {
    return await prisma.ticket.update({ where: { id: ticketId }, data: { status: "PAID" } });
}

const ticketsRepository = {
    getTicketsTypes,
    createTicket,
    getTicketsByUserId,
    findTicket,
    updateTicketStatus
}

export default ticketsRepository;
