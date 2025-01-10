import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllCategoriaSchema } from 'Validators/categoria';
import { findAllCategorias } from '../../../use-cases/categorias';
import { handleError } from '../../../utils/error.handler';

export const findAllCategoriaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllCategoriaSchema.parse(request.query);

    const categorias = await findAllCategorias();

    if (!categorias || categorias.length === 0) {
      reply.code(404).send({ error: 'No se encontraron categorías' });
      return;
    }

    reply.code(200).send(categorias);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
