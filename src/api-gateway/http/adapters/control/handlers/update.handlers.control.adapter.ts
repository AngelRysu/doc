import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateControlSchema, UpdateControlBodySchema } from 'validators/control'; 
import { updateControl } from '../../../use-cases/controles';
import { handleError } from '../../../utils/error.handler';

export const updateControlHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idControl } = UpdateControlSchema.parse(request.params); 
    const { idProceso, idDocumento, obligatorio, digital } = UpdateControlBodySchema.parse(request.body); 

    const controlActualizada = await updateControl(idControl, { idProceso, idDocumento, obligatorio, digital });

    reply.code(200).send(controlActualizada);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
