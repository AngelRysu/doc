import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateProrrogaSchema, UpdateProrrogaBodySchema } from 'validators/prorroga'; 
import { updateProrroga } from '../../../use-cases/prorrogas';
import { handleError } from '../../../utils/error.handler';

export const updateProrrogaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idProrroga } = UpdateProrrogaSchema.parse(request.params); 
    const { idUsuario, idDocumento, vencimiento, estado } = UpdateProrrogaBodySchema.parse(request.body); 

    const ProrrogaActualizado = await updateProrroga(idProrroga, { idUsuario, idDocumento, vencimiento, estado });

    reply.code(200).send(ProrrogaActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
