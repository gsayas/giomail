import { prisma } from "./prisma";

//get all emails
export async function getEmails() {
    return prisma.email.findMany({
        include: {
            tags: true,
        },
    });
}

//mark email as unread
export async function markAsUnread(emailId: number) {
    return prisma.email.update({
        where: { id: emailId },
        data: { read: false },
    });
}

//mark email as unread
export async function markAsRead(emailId: number) {
    return prisma.email.update({
        where: { id: emailId },
        data: { read: true },
    });
}