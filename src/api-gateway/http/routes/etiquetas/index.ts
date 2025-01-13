import { etiqueraAdapter } from '../../adapters';
import {
    createEtiquetaSchema,
    findAllEtiquetaSchema,
    findoneEtiquetaSchema,
    updateEtiquetaSchema,
    deleteEtiquetaSchema
} from './schema';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
}

function Router(fastify: FastifyInstance): void{
    
    fastify.get(
        '/',
        {
            schema:
            {
                ...findAllEtiquetaSchema
            },
        },
        etiqueraAdapter.findAllEtiquetasHandler
    );

    fastify.get(
        '/:idEtiqueta',
        {
            schema:
            {
                ...findoneEtiquetaSchema
            },
        },
        etiqueraAdapter.findOneEtiquetaHandler
    );

    fastify.post(
        '/create',
        {
            schema:{
                ...createEtiquetaSchema
            },
        },
        etiqueraAdapter.createEtiquetaHandler
    );

    fastify.patch(
        '/:idEtiqueta',
        {
            schema:
            {
                ...updateEtiquetaSchema
            },
        },
        etiqueraAdapter.updateEtiquetaHandler
    );

    fastify.delete(
        '/:idEtiqueta',
        {
            schema:
            {
                ...deleteEtiquetaSchema
            },
        },
        etiqueraAdapter.deleteEtiquetaHandler
    );
}


export default Router;