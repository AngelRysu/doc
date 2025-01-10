import { FastifySchema } from 'fastify';

export const createEtiquetaSchema: FastifySchema = {
  tags: ['Etiqueta'],
  summary: 'Crear un Etiqueta',
  description: 'Endpoint para crear una nueva Etiqueta',
  body: {
    type: 'object',
    required: ['nombre'],
    properties: {
      nombre: {
        type: 'string',
        description: 'Nombre del Etiqueta',
      },
    },
  },
  response: {
    200: {
      description: 'Etiqueta creado exitosamente',
      type: 'object',
      properties: {
        idEtiqueta: { type: 'integer', description: 'ID generado para el Etiqueta' },
        nombre: { type: 'string', description: 'Nombre del Etiqueta' },
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
