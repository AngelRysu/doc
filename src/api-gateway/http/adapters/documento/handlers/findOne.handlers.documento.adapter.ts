import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneDocumentoSchema } from 'Validators/documento'; 
import { findOneDocumento } from '../../../use-cases/documentos';
import { handleError } from '../../../utils/error.handler';

export const findOneDocumentoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idDocumento } = FindOneDocumentoSchema.parse(request.params);

    const documento = await findOneDocumento({ idDocumento });

    if (!documento) {
      reply.code(404).send({ error: 'Documento no encontrado' });
      return;
    }

    reply.code(200).send(documento);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
