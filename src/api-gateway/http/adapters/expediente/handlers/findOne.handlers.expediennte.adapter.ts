import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneExpedienteSchema } from 'validators/expediente'; 
import { findOneExpediente } from '../../../use-cases/expedientes';
import { handleError } from '../../../utils/error.handler';

export const findOneExpedienteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idExpediente } = FindOneExpedienteSchema.parse(request.params);

    const expediente = await findOneExpediente({ idExpediente });

    if (!expediente) {
      reply.code(404).send({ error: 'Expediente no encontrado' });
      return;
    }

    reply.code(200).send(expediente);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
