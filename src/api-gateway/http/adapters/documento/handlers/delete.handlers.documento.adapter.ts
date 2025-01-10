import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteDocumentoSchema } from 'Validators/documento';
import { deleteDocumento } from '../../../use-cases/documentos';
import { handleError } from '../../../utils/error.handler';

export const deleteDocumentoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idDocumento } = DeleteDocumentoSchema.parse(request.params);

    const isDeleted = await deleteDocumento({ idDocumento });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Documento no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Documento eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
