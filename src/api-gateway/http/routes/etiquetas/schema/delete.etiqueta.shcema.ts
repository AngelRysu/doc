import { FastifySchema } from 'fastify';

export const deleteEtiquetaSchema: FastifySchema = {
  tags: ['Etiqueta'],
  summary: 'Eliminar una Etiqueta',
  description: 'Endpoint para eliminar una Etiqueta por ID',
  params: {
    type: 'object',
    properties: {
      idEtiqueta: {
        type: 'integer',
        description: 'ID del Etiqueta a eliminar',
      },
    },
    required: ['idEtiqueta'],
  },
  response: {
    200: {
      description: 'Etiqueta eliminado con éxito',
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
