import { etiqueraAdapter } from '../../adapters';
import {
    createEtiquetaSchema,
    findAllEtiquetaSchema
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

    fastify.post(
        '/create',
        {
            schema:{
                ...createEtiquetaSchema
            },
        },
        etiqueraAdapter.createEtiquetaHandler
    );

    
}


export default Router;