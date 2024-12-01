import { prisma } from "./prisma.server";

//get all emails
export async function getEmails() {
    return prisma.email.findMany()
}
