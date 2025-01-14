import { controlAdapter } from '../../adapters'
import {
    createControlSchema,
    findAllControlSchema,
    findOneControlSchema
} from './schema'
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
            schema:{
                ...createControlSchema
            },
        },
        controlAdapter.createControlHandler
    );

    fastify.get(
        '/',
        {
            schema:{
                ...findAllControlSchema
            },
        },
        controlAdapter.findAllControlHandler
    );

    fastify.get(
        '/:idControl',
        {
            schema:{
                ...findOneControlSchema
            },
        },
        controlAdapter.findOneControlHandler
    );
}


export default Router;