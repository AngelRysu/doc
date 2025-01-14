import { FastifySchema } from 'fastify';

export const findAllControlSchema: FastifySchema = {
  tags: ['Control'],
  summary: 'Obtener todos los Controls',
  description: 'Endpoint para obtener todos los Controls registradas en el sistema',
  response: {
    200: {
      description: 'Lista de Controls encontrados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
            idControl: { type: 'integer', description: 'ID generado para el Control' },
            idDocumento: { type: 'integer', description: 'ID del Documento que soporta el Control' },
            obligatorio: { type: 'string', description: 'Indica si el Control es obligatorio' },
            digital: { type: 'string', description: 'Indica si el Control es digital' },
        },
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
