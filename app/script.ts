import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  //
  await prisma.$connect();

  //

  const user = await prisma.user.create({
    data: {
      name: "Rich",
      email: "hello@prisma.com",
    },
  });

  await prisma.post.create({
    data: {
      userId: user.id,
      title: "My first post",
      body: "Lots of really interesting stuff",
      slug: "my-first-post",
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
