import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const res = await prisma.user.create({
    data: {
      email: "foo@bar.com",
      birthDate: new Date(),
      posts: {
        create: [{}, {}],
      },
    },
  });

  console.log(res);

  await prisma.$disconnect();
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
