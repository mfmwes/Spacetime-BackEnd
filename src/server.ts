import fastify from "fastify";
import cors from "@fastify/cors";
import { MemoriesRoutes } from "./routes/memories";
import "dotenv/config";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt"
const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: 'spacetime',
})
app.register(MemoriesRoutes);
app.register(authRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on http://localhost:3333");
  });
