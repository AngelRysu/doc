import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneControlSchema } from 'validators/control'; 
import { findOneControl } from '../../../use-cases/controles';
import { handleError } from '../../../utils/error.handler';

export const findOneControlHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idControl } = FindOneControlSchema.parse(request.params);

    const control = await findOneControl({ idControl });

    if (!control) {
      reply.code(404).send({ error: 'Control no encontrado' });
      return;
    }

    reply.code(200).send(control);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
