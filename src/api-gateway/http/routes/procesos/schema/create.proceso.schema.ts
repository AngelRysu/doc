import { FastifySchema } from 'fastify';

export const createProcesoSchema: FastifySchema = {
  tags: ['Proceso'],
  summary: 'Crear un Proceso',
  description: 'Endpoint para crear un nuevo Proceso',
  body: {
    type: 'object',
    required: ['clave', 'nombre'],
    properties: {
      clave: {
        type: 'string',
        description: 'Clave del proceso',
      },
      nombre: {
        type: 'string',
        description: 'Nombre del Proceso',
      },
    },
  },
  response: {
    200: {
      description: 'Proceso creado exitosamente',
      type: 'object',
      properties: {
        idProceso: { type: 'integer', description: 'ID generado para el Proceso' },
        clave: { type: 'string', description: 'clave del Proceso' },
        nombre: { type: 'string', description: 'Nombre del Proceso' },
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
