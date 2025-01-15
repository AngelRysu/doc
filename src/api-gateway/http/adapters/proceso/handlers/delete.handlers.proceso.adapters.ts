import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteProcesoSchema } from 'validators/proceso';
import { deleteProceso } from '../../../use-cases/procesos';
import { handleError } from '../../../utils/error.handler';

export const deleteProcesoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idProceso } = DeleteProcesoSchema.parse(request.params);

    const isDeleted = await deleteProceso({ idProceso });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Proceso no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Proceso eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
