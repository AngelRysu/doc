import { FastifySchema } from 'fastify';

export const findoneProcesoSchema: FastifySchema = {
  tags: ['Proceso'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar un Proceso',
  params: {
    type: 'object',
    properties: {
      idProceso: { 
        type: 'integer', 
        description: 'ID del Proceso' 
      },
    },
    required: ['idProceso'],
  },
  response: {
    200: {
      description: 'Proceso encontrado',
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
