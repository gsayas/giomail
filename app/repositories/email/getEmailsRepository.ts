import { prisma } from "~/lib/db/prisma";

//get all emails
export default async function getEmails() {
    return prisma.email.findMany({
        include: {
            tags: true,
        },
    });
}