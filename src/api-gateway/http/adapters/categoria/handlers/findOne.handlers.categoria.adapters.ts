import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneCategoriaSchema } from 'Validators/categoria'; 
import { findOneCategoria } from '../../../use-cases/categorias';
import { handleError } from '../../../utils/error.handler';

export const findOneCategoriaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idCategoria } = FindOneCategoriaSchema.parse(request.params);

    const categoria = await findOneCategoria({ idCategoria });

    if (!categoria) {
      reply.code(404).send({ error: 'Categoría no encontrada' });
      return;
    }

    reply.code(200).send(categoria);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
