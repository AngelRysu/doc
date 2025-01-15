import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllExpedienteSchema } from 'validators/expediente';
import { findAllExpedientes } from '../../../use-cases/expedientes';
import { handleError } from '../../../utils/error.handler';

export const findAllProrrogaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllExpedienteSchema.parse(request.query);

    const expediente = await findAllExpedientes();

    if (!expediente || expediente.length === 0) {
      reply.code(404).send({ error: 'No se encontraron categorías' });
      return;
    }

    reply.code(200).send(expediente);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
