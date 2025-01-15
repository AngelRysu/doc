import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneProcesoSchema } from 'validators/proceso'; 
import { findOneProceso } from '../../../use-cases/procesos';
import { handleError } from '../../../utils/error.handler';

export const findOneProcesoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idProceso } = FindOneProcesoSchema.parse(request.params);

    const proceso = await findOneProceso({ idProceso });

    if (!proceso) {
      reply.code(404).send({ error: 'Proceso no encontrado' });
      return;
    }

    reply.code(200).send(proceso);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
