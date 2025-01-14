import { FastifySchema } from 'fastify';

export const deleteControlSchema: FastifySchema = {
  tags: ['Control'],
  summary: 'Eliminar una categoría',
  description: 'Endpoint para eliminar una categoría por ID',
  params: {
    type: 'object',
    properties: {
      idControl: {
        type: 'integer',
        description: 'ID de la categoría a eliminar',
      },
    },
    required: ['idControl'],
  },
  response: {
    200: {
      description: 'Categoría eliminada con éxito',
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
