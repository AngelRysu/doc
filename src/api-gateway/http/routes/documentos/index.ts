import { documentoAdapter } from '../../adapters'
import {
    createDocumentoSchema,
    findAllDocumentoSchema,
    findoneDocumentoSchema,
    updateDocumentoSchema,
    deleteDocumentoSchema
} from './schema'
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
                ...findAllDocumentoSchema
            },
        },
        documentoAdapter.findAllDocumentosHandler
    );

    fastify.get(
        '/:idDocumento',
        {
            schema:
            {
                ...findoneDocumentoSchema
            },
        },
        documentoAdapter.findOneDocumentoHandler
    );

    fastify.post(
        '/create',
        {
            schema:{
                ...createDocumentoSchema
            },
        },
        documentoAdapter.createDocumentoHandler
    );

    fastify.patch(
        './:idDocumento',
        {
            schema:
            {
                ...updateDocumentoSchema
            },
        },
        documentoAdapter.updateDocumentoHandler
    );

    fastify.delete(
        './:idDocumento',
        {
            schema:
            {
                ...deleteDocumentoSchema
            },
        },
        documentoAdapter.deleteDocumentoHandler
    );
}


export default Router;