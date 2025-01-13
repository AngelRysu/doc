import { FastifySchema } from 'fastify';

export const findoneEtiquetaSchema: FastifySchema = {
  tags: ['Etiqueta'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar una Etiqueta',
  params: {
    type: 'object',
    properties: {
      idEtiqueta: { 
        type: 'integer', 
        description: 'ID de la Etiqueta' 
      },
    },
    required: ['idEtiqueta'],
  },
  response: {
    200: {
      description: 'Etiqueta encontrada',
      type: 'object',
      properties: {
        idEtiqueta: { type: 'integer', description: 'ID generado para la Etiqueta' },
        nombre: { type: 'string', description: 'Nombre de la Etiqueta' },
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
