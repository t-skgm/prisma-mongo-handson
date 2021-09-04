import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  //
  await prisma.$connect();

  // Reset
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  //

  await prisma.user.create({
    data: {
      name: "Rich",
      email: "hello@prisma.com",
      posts: {
        create: {
          title: "My first post",
          body: "Lots of really interesting stuff",
          slug: "my-first-post",
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    console.error("[main]", e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
