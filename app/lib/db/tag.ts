import { prisma } from "./prisma";

//check if Tag already exists
export async function tagExists(tagName: string) {
    return prisma.tag.findUnique({ where: { name: tagName } });
}

//create a new Tag
export async function createTag(tagName: string) {
    return prisma.tag.create({ data: { name: tagName } });
}
