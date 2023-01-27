import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { postPayments } from "@/controllers";
import { paymentsSchema } from "@/schemas";


const paymentsRouter = Router();

paymentsRouter
    .all("/*", authenticateToken)
    .get("/health", (_req, res) => res.send("OK!"))
    .post("/process",validateBody(paymentsSchema), postPayments)

export { paymentsRouter };
