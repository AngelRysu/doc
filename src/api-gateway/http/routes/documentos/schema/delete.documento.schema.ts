import { FastifySchema } from 'fastify';

export const deleteDocumentoSchema: FastifySchema = {
  tags: ['Documento'],
  summary: 'Eliminar un Documento',
  description: 'Endpoint para eliminar un Documento por ID',
  params: {
    type: 'object',
    properties: {
      idDocumento: {
        type: 'integer',
        description: 'ID del Documento a eliminar',
      },
    },
    required: ['idDocumento'],
  },
  response: {
    200: {
      description: 'Documento eliminado con éxito',
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Mensaje de éxito' },
      },
    },
    400: {
      description: 'Solicitud inválida',
      type: 'object',
      properties: {
        error: { type: 'string', description: 'Tipo de error' },
        message: { type: 'string', description: 'Mensaje del error' },
      },
    },
  },
};
