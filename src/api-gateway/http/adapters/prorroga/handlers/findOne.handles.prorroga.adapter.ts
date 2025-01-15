import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneProrrogaSchema } from 'validators/prorroga'; 
import { findOneProrroga } from '../../../use-cases/prorrogas';
import { handleError } from '../../../utils/error.handler';

export const findOneProrrogaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idProrroga } = FindOneProrrogaSchema.parse(request.params);

    const prorroga = await findOneProrroga({ idProrroga });

    if (!prorroga) {
      reply.code(404).send({ error: 'Prorroga no encontrado' });
      return;
    }

    reply.code(200).send(prorroga);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
