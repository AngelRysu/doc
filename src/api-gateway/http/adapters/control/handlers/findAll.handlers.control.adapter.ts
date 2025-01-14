import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllControlSchema } from 'validators/control';
import { findAllControls } from '../../../use-cases/controles';
import { handleError } from '../../../utils/error.handler';

export const findAllControlHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllControlSchema.parse(request.query);

    const controls = await findAllControls();

    if (!controls || controls.length === 0) {
      reply.code(404).send({ error: 'No se encontraron categorías' });
      return;
    }

    reply.code(200).send(controls);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
