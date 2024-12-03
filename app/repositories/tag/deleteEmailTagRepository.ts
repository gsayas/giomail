import { prisma } from "~/lib/prisma";

//remove tag from email
export async function removeTagFromEmail(emailId: number, tagId: number) {
    return prisma.email.update({
        where: { id: emailId },
        data: { tags: { disconnect: { id: tagId } } },
        include: { tags: true },
    });
}