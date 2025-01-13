import { Schema } from 'zod';
import { procesoAdapter } from '../../adapters';
import {
    createProcesoSchema,
    deleteProcesoSchema,
    findAllProcesoSchema,
    findoneProcesoSchema,
    updateProcesoSchema
} from './schema';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
        authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void{
    fastify.get(
        '/',
        {
            schema:
            {
                ...findAllProcesoSchema
            }
        },
        procesoAdapter.findAllProcesoHandler
    );

    fastify.get(
        '/:idProceso',
        {
            schema:
            {
                ...findoneProcesoSchema
            }
        },
        procesoAdapter.findOneProcesoHandler
    );
    
    fastify.post(
        '/create',
        {
            schema:
            {
                ...createProcesoSchema
            },
        },
        procesoAdapter.createProcesoHandler
    );

    fastify.patch(
        '/:idProceso',
        {
            schema:
            {
                ...updateProcesoSchema
            }
        },
        procesoAdapter.updateProcesoHandler
    );

    fastify.delete(
        '/:idProceso',
        {
            schema: {
                ...deleteProcesoSchema
            }
        },
        procesoAdapter.deleteProcesoHandler
    );  
};


export default Router
