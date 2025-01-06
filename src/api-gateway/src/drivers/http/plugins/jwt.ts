import { FastifyInstance, FastifyRequest } from 'fastify';
import * as dotenv from 'dotenv';

dotenv.config();

export default async function (fastify: FastifyInstance) {
  fastify.register(import('@fastify/jwt'), {
    secret: process.env.JWT_SECRET || 'algosecreto',
  });

  fastify.decorate('authenticate', async function (request: FastifyRequest) {
    try {
      await request.jwtVerify();
    } catch (err) {
      console.error(err);
      throw new Error('Unauthorized'); 
    }
  });
}
