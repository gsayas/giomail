import { prisma } from "~/lib/prisma";

//mark email as unread
export async function markAsUnread(emailId: number) {
    return prisma.email.update({
        where: { id: emailId },
        data: { read: false },
        include: { tags: true },
    });
}

//mark email as unread
export async function markAsRead(emailId: number) {
    return prisma.email.update({
        where: { id: emailId },
        data: { read: true },
        include: { tags: true },
    });
}