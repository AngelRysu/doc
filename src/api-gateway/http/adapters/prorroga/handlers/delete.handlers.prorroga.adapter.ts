import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteProrrogaSchema } from 'validators/prorroga';
import { deleteProrroga } from '../../../use-cases/prorrogas';
import { handleError } from '../../../utils/error.handler';

export const deleteProrrogaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idProrroga } = DeleteProrrogaSchema.parse(request.params);

    const isDeleted = await deleteProrroga({ idProrroga });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Prorroga no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Prorroga eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
