import { categoriaAdapter } from '../../adapters';
import { createCategoriaSchema, 
  findoneCategoriaSchema,
  findAllCategoriaSchema,
  deleteCategoriaSchema,
  updateCategoriaSchema
} from './schema';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

function Router(fastify: FastifyInstance): void {
  fastify.get(
    '/',
    {
      schema: {
        ...findAllCategoriaSchema,
      },
    },
    categoriaAdapter.findAllCategoriaHandler
  );

  fastify.get(
    '/:idCategoria',
    {
      schema: {
        ...findoneCategoriaSchema,
      },
    },
    categoriaAdapter.findOneCategoriaHandler
  );
  
  fastify.post(
    '/usuarios/:idUsuario',
    {
      schema: {
        ...createCategoriaSchema,
      },
    },
    categoriaAdapter.createCategoriaHandler
  );
  
  fastify.patch(
    '/:idCategoria',
    {
      schema:{...updateCategoriaSchema},
    },
    categoriaAdapter.updateCategoriaHandler
  );

  fastify.delete(
    '/:idCategoria',
    {
      schema:{...deleteCategoriaSchema
      },
    },
    categoriaAdapter.deleteCategoriaHandler
  );

}

export default Router;
