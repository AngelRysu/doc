import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteExpedienteSchema } from 'validators/expediente';
import { deleteExpediente } from '../../../use-cases/expedientes';
import { handleError } from '../../../utils/error.handler';

export const deleteExpedienteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idExpediente } = DeleteExpedienteSchema.parse(request.params);

    const isDeleted = await deleteExpediente({ idExpediente });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Expediente no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Expediente eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
