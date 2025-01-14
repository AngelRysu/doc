import { FastifySchema } from 'fastify';

export const updateControlSchema: FastifySchema = {
  tags: ['Control'],
  summary: 'Modificar una categoría',
  description: 'Endpoint para modificar una categoría existente.',
  params: {
    type: 'object',
    properties: {
      idControl: {
        type: 'integer',
        description: 'ID de la categoría que se desea modificar',
      },
    },
    required: ['idControl'],
  },
  body: {
    type: 'object',
    properties: {
        idProceso: {
          type: 'integer',
          description: 'ID del Proceso al que pertenece el Control',
        },
          idDocumento: {
              type: 'integer',
              description: 'ID del Documento que soporta el Control',
          },
          obligatorio: {
              type: 'string',
              enum: ['S', 'N'],
              description: 'Indica si el Control es obligatorio',
          },
          digital: {
              type: 'string',
              enum: ['S', 'N'],
              description: 'Indica si el Control es digital',
          },
      },
    required: ['idProceso', 'idDocumento', 'obligatorio', 'digital'],
  },
  response: {
    200: {
      description: 'Categoría modificada exitosamente',
      type: 'object',
      properties: {
        idControl: { type: 'integer', description: 'ID generado para la categoría' },
        idProceso: { type: 'integer', description: 'ID del Proceso al que pertenece el Control' },
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
