import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

async function main() {
    for (let i = 0; i < 15; i++) {
        await prisma.koncert.create({
            data: {
                fellepo: faker.internet.username(),
                kezdesiIdo: faker.date.soon(),
                idotartam: faker.number.int({ min: 60, max: 120 }),
                elmarad: faker.datatype.boolean()
            }
        })
    }
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })