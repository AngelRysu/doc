import { FastifyReply, FastifyRequest } from 'fastify';
import { createCategoria } from '../../../use-cases/categorias';
import { CreateCategoriaSchema } from 'Validators/categoria';
import { handleError } from '../../../utils/error.handler';

export const createCategoriaHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const data = CreateCategoriaSchema.parse(request.body);
      const newCategoria = await createCategoria(data);
      reply.code(201).send(newCategoria);
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      handleError({ reply, error });
    }
  };
