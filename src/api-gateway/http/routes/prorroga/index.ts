import { prorrogaAdapter } from '../../adapters';
import {
    createProrrogaSchema,
    findAllProrrogaSchema,
    findoneProrrogaSchema,
    deleteProrrogaSchema,
    updateProrrogaSchema
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

    fastify.get(
        '/:idProrroga',
        {
            schema:
            {
                ...findoneProrrogaSchema
            },
        },
        prorrogaAdapter.findOneProrrogaHandler
    );

    fastify.delete(
        '/:idProrroga',
        {
            schema:
            {
                ...deleteProrrogaSchema
            },
        },
        prorrogaAdapter.deleteProrrogaHandler
    );

    fastify.patch(
        '/:idProrroga',
        {
            schema:
            {
                ...updateProrrogaSchema
            },
        },
        prorrogaAdapter.updateProrrogaHandler
    );
};


export default Router
