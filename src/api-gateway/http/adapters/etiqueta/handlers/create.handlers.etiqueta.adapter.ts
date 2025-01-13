import { FastifyReply, FastifyRequest } from 'fastify';
import { createEtiqueta } from '../../../use-cases/etiquetas';
import { CreateEtiquetaSchema } from 'validators/etiqueta';
import { handleError } from '../../../utils/error.handler';

export const createEtiquetaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateEtiquetaSchema.parse(request.body);
    const newEtiqueta = await createEtiqueta(data);
    reply.code(201).send(newEtiqueta);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
