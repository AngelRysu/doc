import { FastifySchema } from 'fastify';

export const updateProcesoSchema: FastifySchema = {
  tags: ['Proceso'],
  summary: 'Modificar un Proceso',
  description: 'Endpoint para modificar un Proceso existente.',
  params: {
    type: 'object',
    properties: {
      idProceso: {
        type: 'integer',
        description: 'ID del Proceso que se desea modificar',
      },
    },
    required: ['idProceso'],
  },
  body: {
    type: 'object',
    required: ['clave', 'nombre'],
    properties: {
      clave: {
        type: 'string',
        description: 'Clave del Proceso',
      },
      nombre: {
        type: 'string',
        description: 'Nombre del Proceso',
      },
    },
  },
  response: {
    200: {
        description: 'Proceso encontrado exitosamente',
        type: 'object',
        properties: {
            idProceso: { type: 'integer', description: 'ID generado para el Proceso' },
            clave: { type: 'string', description: 'Clave del Proceso' },
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
