import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllDocumentoSchema } from 'Validators/documento';
import { findAllDocumentos } from '../../../use-cases/documentos';
import { handleError } from '../../../utils/error.handler';

export const findAllDocumentosHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllDocumentoSchema.parse(request.query);

    const documentos = await findAllDocumentos();

    if (!documentos || documentos.length === 0) {
      reply.code(404).send({ error: 'No se encontraron Documentos' });
      return;
    }

    reply.code(200).send(documentos);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
