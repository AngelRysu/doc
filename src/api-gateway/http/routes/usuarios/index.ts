import { usuarioAdapter } from '../../adapters';
import {
    createUsuarioSchema,
    deleteUsuarioSchema,
    findAllUsuarioSchema,
    findoneUsuarioSchema,
    updateUsuarioSchema
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
            schema:{
                ...findAllUsuarioSchema
            },
        },
        usuarioAdapter.findAllUsuariosHandler
    );
    
    fastify.get(
        '/:idUsuario',
        {
            schema:{
                ...findoneUsuarioSchema
            },
        },
        usuarioAdapter.findOneUsuarioHandler
    );

    fastify.post(
        '/create',
        {
            schema:{
                ...createUsuarioSchema
            },
        },
        usuarioAdapter.createUsuarioHandler
    );

    fastify.delete(
        '/:idUsuario',
        {
            schema:{
                ...deleteUsuarioSchema
            },
        },
        usuarioAdapter.deleteUsuarioHandler
    );
    
    fastify.patch(
        '/:idUsuario',
        {
            schema:
            {
                ...updateUsuarioSchema
            },
        },
        usuarioAdapter.updateUsuarioHandler
    );
}


export default Router;