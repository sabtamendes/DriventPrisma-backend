import { CreatePayment } from "@/protocols";
import { prisma } from "@/config";
import { Payment } from "@prisma/client";

async function createPayment(data: CreatePayment) {
  return prisma.payment.create({ data: data });
}

async function findUserPayment(ticketId: number): Promise<Payment> {
  return prisma.payment.findFirst({ where: { ticketId } });
}

const paymentsRepository = {
  createPayment,
  findUserPayment
};

export default paymentsRepository;
