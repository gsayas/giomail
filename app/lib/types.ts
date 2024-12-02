import { Email as PrismaEmail, Tag } from '@prisma/client';

export interface Email extends PrismaEmail {
    tags: Tag[];
}