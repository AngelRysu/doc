import { FastifyReply, FastifyRequest } from 'fastify';
import { createProrroga } from '../../../use-cases/prorrogas';
import { CreateProrrogaSchema } from 'validators/prorroga';
import { handleError } from '../../../utils/error.handler';

export const createProrrogaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateProrrogaSchema.parse(request.body);
    const newProrroga = await createProrroga(data);
    reply.code(201).send(newProrroga);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
