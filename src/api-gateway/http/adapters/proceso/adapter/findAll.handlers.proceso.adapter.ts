import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllProcesosSchema } from 'validators/proceso';
import { findAllProcesos } from '../../../use-cases/procesos';
import { handleError } from '../../../utils/error.handler';

export const findAllProcesoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllProcesosSchema.parse(request.query);

    const proceso = await findAllProcesos();

    if (!proceso || proceso.length === 0) {
      reply.code(404).send({ error: 'No se encontraron Procesos' });
      return;
    }

    reply.code(200).send(proceso);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
