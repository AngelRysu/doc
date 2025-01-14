import { controlAdapter } from '../../adapters'
import {
    createControlSchema
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

}


export default Router;