import { FastifySchema } from 'fastify';

export const createControlSchema: FastifySchema = {
  tags: ['Control'],
  summary: 'Crear un registro de Control',
  description: 'Endpoint para crear un registro de Control',
  body: {
    type: 'object',
    required: ['idProceso', 'idDocumento', 'obligatorio', 'digital'],
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
  },
  response: {
    200: {
      description: 'Control registrado correctamente',
      type: 'object',
      properties: {
        idControl: { type: 'integer', description: 'ID generado para el Control' },
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
