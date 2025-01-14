import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteControlSchema } from 'validators/control';
import { deleteControl } from '../../../use-cases/controles';
import { handleError } from '../../../utils/error.handler';

export const deleteControlHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idControl } = DeleteControlSchema.parse(request.params);

    const isDeleted = await deleteControl({ idControl });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Control no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Control eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
