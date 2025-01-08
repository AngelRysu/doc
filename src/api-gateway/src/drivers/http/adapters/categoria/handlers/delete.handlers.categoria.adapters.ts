import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteCategoriaSchema } from 'Validators/categoria';
import { deleteCategoria } from '../../../use-cases/categorias';
import { handleError } from '../../../utils/error.handler';

export const deleteCategoriaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    // Validar los parámetros con Zod
    const { idCategoria } = DeleteCategoriaSchema.parse(request.params);

    // Intentar eliminar la categoría
    const isDeleted = await deleteCategoria({ idCategoria });

    if (!isDeleted) {
      // Si no se encontró o eliminó la categoría
      reply.code(404).send({ error: 'Categoría no encontrada' });
      return;
    }

    // Respuesta exitosa
    reply.code(200).send({ message: 'Categoría eliminada con éxito' });
  } catch (err: unknown) {
    // Manejar errores
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
