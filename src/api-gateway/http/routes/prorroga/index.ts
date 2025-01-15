import { Schema } from 'zod';
import { prorrogaAdapter } from '../../adapters';
import {
    createProrrogaSchema,
} from './schema';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
        authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void{
    fastify.post(
        '/create',
        {
            schema:
            {
                ...createProrrogaSchema
            },
        },
        prorrogaAdapter.createProrrogaHandler
    );
};


export default Router
