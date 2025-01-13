import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneEtiquetaSchema } from 'validators/etiqueta'; 
import { findOneEtiqueta } from '../../../use-cases/etiquetas';
import { handleError } from '../../../utils/error.handler';

export const findOneEtiquetaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idEtiqueta } = FindOneEtiquetaSchema.parse(request.params);

    const etiqueta = await findOneEtiqueta({ idEtiqueta });
    
    if (!etiqueta) {
      reply.code(404).send({ error: 'Etiqueta no encontrado' });
      return;
    }

    reply.code(200).send(etiqueta);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
