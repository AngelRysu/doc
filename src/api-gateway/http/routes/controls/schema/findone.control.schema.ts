import { FastifySchema } from 'fastify';

export const findOneControlSchema: FastifySchema = {
  tags: ['Control'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar un Control',
  params: {
    type: 'object',
    properties: {
      idControl: { 
        type: 'integer', 
        description: 'ID del Control' 
      },
    },
    required: ['idControl'],
  },
  response: {
    200: {
      description: 'Control encontrado',
      type: 'object',
      properties: {
        idControl: { type: 'integer', description: 'ID generado para el Control' },
        idProceso: { type: 'integer', description: 'ID del proceso que soporta el Control' },
        idDocumento: { type: 'integer', description: 'ID del Documento que soporta el Control' },
        obligatorio: { type: 'string', description: 'Indica si el Control es obligatorio' },
        digital: { type: 'string', description: 'Indica si el Control es digital' },
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
