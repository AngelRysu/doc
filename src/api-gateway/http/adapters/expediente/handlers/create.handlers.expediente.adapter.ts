import { FastifyReply, FastifyRequest } from 'fastify';
import { createExpediente } from '../../../use-cases/expedientes';
import { CreateExpedienteSchema } from 'validators/expediente';
import { handleError } from '../../../utils/error.handler';

export const createExpedienteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateExpedienteSchema.parse(request.body);
    const newExpediente = await createExpediente(data);
    reply.code(201).send(newExpediente);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
