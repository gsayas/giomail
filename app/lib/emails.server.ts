import { prisma } from "./prisma.server";

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

//update email with new Tag
export async function addTagToEmail(emailId: number, tagName: string) {
    let tag = await prisma.tag.findUnique({ where: { name: tagName } });
    if (!tag) {
        tag = await prisma.tag.create({ data: { name: tagName } });
    }

    return prisma.email.update({
        where: { id: emailId },
        data: { tags: { connect: { id: tag.id } } },
        include: { tags: true },
    });
}