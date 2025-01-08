import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteCategoriaSchema } from 'Validators/categoria';
import { deleteCategoria } from '../../../use-cases/categorias';
import { handleError } from '../../../utils/error.handler';

export const deleteCategoriaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idCategoria } = DeleteCategoriaSchema.parse(request.params);

    const isDeleted = await deleteCategoria({ idCategoria });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Categoría no encontrada' });
      return;
    }

    reply.code(200).send({ message: 'Categoría eliminada con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
