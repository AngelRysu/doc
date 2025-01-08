import { usuarioAdapter } from '../../adapters';
import {
    createUsuarioSchema
} from './schema';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
}

function Router(fastify: FastifyInstance): void{
    fastify.post(
        '/create',
        {
            schema:{
                ...createUsuarioSchema
            },
        },
        usuarioAdapter.createUsuarioHandler
    );
}


export default Router;