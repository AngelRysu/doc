import fastifyPlugin from 'fastify-plugin';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fastifyJwt from '@fastify/jwt';

async function jwtPlugin(fastify: FastifyInstance) {
  fastify.register(fastifyJwt, {
    secret: process.env.AUTH_JWT_SECRET as string,
  });

  fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      console.error(err);
      reply.code(401).send({ error: 'Unauthorized' });
    }
  });
}

export default fastifyPlugin(jwtPlugin);
