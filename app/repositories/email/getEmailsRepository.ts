import { prisma } from "~/lib/prisma";

//get all emails
export default async function getEmails() {
    return prisma.email.findMany({
        include: {
            tags: true,
        },
    });
}