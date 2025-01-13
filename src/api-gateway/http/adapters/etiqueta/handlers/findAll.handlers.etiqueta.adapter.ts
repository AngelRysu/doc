import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllEtiquetaSchema } from 'validators/etiqueta';
import { findAllEtiquetas } from '../../../use-cases/etiquetas';
import { handleError } from '../../../utils/error.handler';

export const findAllEtiquetasHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllEtiquetaSchema.parse(request.query);

    const etiquetas = await findAllEtiquetas();

    if (!etiquetas || etiquetas.length === 0) {
      reply.code(404).send({ error: 'No se encontraron etiquetas' });
      return;
    }

    reply.code(200).send(etiquetas);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
