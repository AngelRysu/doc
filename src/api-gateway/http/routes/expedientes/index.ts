import { expedienteAdapter } from '../../adapters';
import { createExpedienteSchema,
    findAllExpedienteSchema

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
                ...createExpedienteSchema
            },
        },
        expedienteAdapter.createExpedienteHandler
    );

    fastify.get(
        '/',
        {
            schema:
            {
                ...findAllExpedienteSchema
            },
        },
        expedienteAdapter.findAllProrrogaHandler
    );
};


export default Router
