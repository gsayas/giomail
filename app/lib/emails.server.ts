import { prisma } from "./prisma.server";

//get all emails
export async function getEmails() {
    return prisma.email.findMany()
}

//mark email as unread
export async function markAsUnread(emailId: number) {
    return prisma.email.update({
        where: { id: emailId },
        data: { read: false },
    });
}
