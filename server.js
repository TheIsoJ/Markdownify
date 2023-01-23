import fastify from "fastify";

const app = fastify()

app.listen({ port: process.env.PORT })