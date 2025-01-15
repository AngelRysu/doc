import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllProrrogaSchema } from 'validators/prorroga';
import { findAllProrrogas } from '../../../use-cases/prorrogas';
import { handleError } from '../../../utils/error.handler';

export const findAllProrrogaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllProrrogaSchema.parse(request.query);

    const prorrogas = await findAllProrrogas();

    if (!prorrogas || prorrogas.length === 0) {
      reply.code(404).send({ error: 'No se encontraron categorías' });
      return;
    }

    reply.code(200).send(prorrogas);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
