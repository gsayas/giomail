import { prisma } from "~/lib/db/prisma";

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