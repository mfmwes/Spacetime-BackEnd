import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { MemoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(MemoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on http://localhost:3333");
  });
