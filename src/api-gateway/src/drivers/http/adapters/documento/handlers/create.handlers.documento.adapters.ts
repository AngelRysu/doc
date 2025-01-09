import { FastifyReply, FastifyRequest } from 'fastify';
import { createDocumento } from '../../../use-cases/documentos';
import { CreateDocumentoSchema } from 'Validators/documento';
import { handleError } from '../../../utils/error.handler';

export const createDocumentoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateDocumentoSchema.parse(request.body);
    const newDocumento = await createDocumento(data);
    reply.code(201).send(newDocumento);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
