import { CreatePayment } from "@/protocols";
import { prisma } from "@/config";

async function createPayment(data: CreatePayment) {
    return prisma.payment.create({ data });
}

const paymentsRepository = {
    createPayment
}

export default paymentsRepository;