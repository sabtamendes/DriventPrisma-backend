import { notFoundError, unauthorizedError } from "@/errors";
import { Payments, ResponsePayment } from "@/protocols";
import paymentsRepository from "@/repositories/payments-repository";
import ticketsRepository from "@/repositories/tickets-repository";


async function postPayments(data: Payments, userId: number): Promise<ResponsePayment> {
  const ticket = await ticketsRepository.findTicket(data.ticketId);

  if (!ticket) throw notFoundError();

  if (ticket.Enrollment.userId !== userId) throw unauthorizedError();

  const newObject = {
    ticketId: data.ticketId,
    value: ticket.TicketType.price,
    cardIssuer: data.cardData.issuer,
    cardLastDigits: data.cardData.number.toString().slice(-4)
  };

  const paymentResponse = await paymentsRepository.createPayment(newObject);
  if (!paymentResponse) throw notFoundError();

  await ticketsRepository.updateTicketStatus(ticket.id);
  return paymentResponse;
}

async function getPaymentByTicketId(ticketId: number, userId: number): Promise<ResponsePayment> {
    
  const ticket = await ticketsRepository.findTicketByTicketId(ticketId);

  if (!ticket) throw notFoundError(); 

  if (ticket.Enrollment.userId !== userId) throw unauthorizedError(); 

  const paymentResponse = await paymentsRepository.findUserPayment(ticketId);
  if (!paymentResponse) throw notFoundError();
  return paymentResponse;
}

const paymentsService = {
  postPayments,
  getPaymentByTicketId
};

export default paymentsService;
