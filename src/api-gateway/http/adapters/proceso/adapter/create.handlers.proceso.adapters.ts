import { FastifyReply, FastifyRequest } from 'fastify';
import { createProceso } from '../../../use-cases/procesos';
import { CreateProcesoSchema } from 'validators/proceso';
import { handleError } from '../../../utils/error.handler';

export const createProcesoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateProcesoSchema.parse(request.body);
    const newProceso = await createProceso(data);
    reply.code(201).send(newProceso);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};