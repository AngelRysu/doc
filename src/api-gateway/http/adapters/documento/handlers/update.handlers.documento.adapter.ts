import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateDocumentoSchema, UpdateDocumentoBodySchema } from 'validators/documento'; 
import { updateDocumento } from '../../../use-cases/documentos';
import { handleError } from '../../../utils/error.handler';

export const updateDocumentoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idDocumento } = UpdateDocumentoSchema.parse(request.params); 
    const { clave, nombre, tipo } = UpdateDocumentoBodySchema.parse(request.body); 

    const documentoActualizado = await updateDocumento(idDocumento, { clave, nombre, tipo });

    reply.code(200).send(documentoActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
