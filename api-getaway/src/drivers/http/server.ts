import Fastify from "fastify";
import { z } from "zod";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const app = Fastify();
app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor escuchando en ${address}`);
});

app.register(swagger, {
  openapi: {
    info: {
      title: "Documentación de la API",
      version: "1.0.0",
    },
  },
});

app.register(swaggerUi, {
  routePrefix: "/docs",
});
