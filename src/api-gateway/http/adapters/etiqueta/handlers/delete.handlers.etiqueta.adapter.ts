import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteEtiquetaSchema } from 'validators/etiqueta';
import { deleteEtiqueta } from '../../../use-cases/etiquetas';
import { handleError } from '../../../utils/error.handler';

export const deleteEtiquetaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idEtiqueta } = DeleteEtiquetaSchema.parse(request.params);

    const isDeleted = await deleteEtiqueta({ idEtiqueta });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Etiqueta no encontrada' });
      return;
    }

    reply.code(200).send({ message: 'Etiqueta eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
