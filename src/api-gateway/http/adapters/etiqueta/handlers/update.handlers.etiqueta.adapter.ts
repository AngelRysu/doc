import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateEtiquetaBodySchema, UpdateEtiquetaSchema } from 'validators/etiqueta'; 
import { updateEtiqueta } from '../../../use-cases/etiquetas';
import { handleError } from '../../../utils/error.handler';

export const updateEtiquetaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idEtiqueta } = UpdateEtiquetaSchema.parse(request.params); 
    const { nombre } = UpdateEtiquetaBodySchema.parse(request.body); 

    const etiquetaActualizado = await updateEtiqueta(idEtiqueta, { nombre });

    reply.code(200).send(etiquetaActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
