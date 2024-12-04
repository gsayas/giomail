import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.email.createMany({
        data: [
            {
                subject: 'Welcome to GioMail',
                body: 'This is your first email!',
                sender: 'admin@giomail.com',
                read: false,
            },
            {
                subject: 'Getting Started',
                body: 'Here are some tips to get started with GioMail.',
                sender: 'admin@giomail.com',
                read: false,
            },
        ],
    });

    await prisma.tag.createMany({
        data: [
            { name: 'work' },
            { name: 'personal' },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });