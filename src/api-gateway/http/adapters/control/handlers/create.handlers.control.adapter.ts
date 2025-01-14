import { FastifyReply, FastifyRequest } from 'fastify';
import { createControl } from '../../../use-cases/controles';
import { CreateControlSchema } from 'validators/control';
import { handleError } from '../../../utils/error.handler';

export const createControlHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateControlSchema.parse(request.body);
    const newControl = await createControl(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
