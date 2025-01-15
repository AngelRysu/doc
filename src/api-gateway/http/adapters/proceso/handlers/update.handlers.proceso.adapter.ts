import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateProcesoSchema, UpdateProcesoBodySchema } from 'validators/proceso'; 
import { updateProceso } from '../../../use-cases/procesos';
import { handleError } from '../../../utils/error.handler';

export const updateProcesoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idProceso } = UpdateProcesoSchema.parse(request.params); 
    const { clave, nombre } = UpdateProcesoBodySchema.parse(request.body); 

    const procesoActualizado = await updateProceso(idProceso, { clave, nombre });

    reply.code(200).send(procesoActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
