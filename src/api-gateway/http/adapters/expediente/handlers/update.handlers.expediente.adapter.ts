import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateExpedienteSchema, UpdateExpedienteBodySchema } from 'validators/expediente'; 
import { updateExpediente } from '../../../use-cases/expedientes';
import { handleError } from '../../../utils/error.handler';

export const updateExpedienteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idExpediente } = UpdateExpedienteSchema.parse(request.params); 
    const { idDocumento, idUsuario, fecha, estado } = UpdateExpedienteBodySchema.parse(request.body); 

    const ExpedienteActualizado = await updateExpediente(idExpediente, { idDocumento, idUsuario, fecha, estado });

    reply.code(200).send(ExpedienteActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
