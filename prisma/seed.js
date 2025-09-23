import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const newStyle = await prisma.style.create({
    data: {
      nickname: faker.person.fullName(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      password: "1234",
    },
  });

  console.log(`Created a new style with ID: ${newStyle.id}`);

  const newCuration = await prisma.curation.create({
    data: {
      styleId: newStyle.id,
      nickname: faker.person.fullName(),
      content: faker.lorem.paragraph(),
      password: "4321",
      trendy: faker.number.int({ min: 1, max: 10 }),
      personality: faker.number.int({ min: 1, max: 10 }),
      practicality: faker.number.int({ min: 1, max: 10 }),
      costEffectiveness: faker.number.int({ min: 1, max: 10 }),
    },
  });

  console.log(`Created a new curation with ID: ${newCuration.id}`);
  console.log(`Curation's styleId: ${newCuration.styleId}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
