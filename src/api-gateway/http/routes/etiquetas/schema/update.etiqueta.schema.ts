import { FastifySchema } from 'fastify';

export const updateEtiquetaSchema: FastifySchema = {
  tags: ['Etiqueta'],
  summary: 'Modificar una Etiqueta',
  description: 'Endpoint para modificar una etiqueta existente.',
  params: {
    type: 'object',
    properties: {
      idEtiqueta: {
        type: 'integer',
        description: 'ID del Etiqueta que se desea modificar',
      },
    },
    required: ['idEtiqueta'],
  },
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
        description: 'Etiqueta encontrada exitosamente',
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
