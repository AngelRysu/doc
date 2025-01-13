import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateCategoriaSchema, UpdateCategoriaBodySchema } from 'validators/categoria'; 
import { updateCategoria } from '../../../use-cases/categorias';
import { handleError } from '../../../utils/error.handler';

export const updateCategoriaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idCategoria } = UpdateCategoriaSchema.parse(request.params); 
    const { idEtiqueta, idUsuario } = UpdateCategoriaBodySchema.parse(request.body); 

    const categoriaActualizada = await updateCategoria(idCategoria, { idEtiqueta, idUsuario });

    reply.code(200).send(categoriaActualizada);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
