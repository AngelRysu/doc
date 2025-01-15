import { prorrogaAdapter } from '../../adapters';
import {
    createProrrogaSchema,
    findAllProrrogaSchema,
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

    fastify.get(
        '/',
        {
            schema:
            {
                ...findAllProrrogaSchema
            },
        },
        prorrogaAdapter.findAllProrrogaHandler
    );
};


export default Router
