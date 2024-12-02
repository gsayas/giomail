import { prisma } from "./prisma";

//update email with new Tag
export async function addTagToEmail(emailId: number, tagName: string) {
    let tag = await findTagByName(tagName);
    if (!tag) {
        tag = await createTag(tagName);
    }

    return prisma.email.update({
        where: { id: emailId },
        data: { tags: { connect: { id: tag.id } } },
        include: { tags: true },
    });
}

async function findTagByName(tagName: string) {
    return prisma.tag.findUnique({ where: { name: tagName } });
}

async function createTag(tagName: string) {
    return prisma.tag.create({ data: { name: tagName } });
}
