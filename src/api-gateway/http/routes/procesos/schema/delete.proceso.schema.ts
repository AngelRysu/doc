import { FastifySchema } from 'fastify';

export const deleteProcesoSchema: FastifySchema = {
  tags: ['Proceso'],
  summary: 'Eliminar un Proceso',
  description: 'Endpoint para eliminar un Proceso por ID',
  params: {
    type: 'object',
    properties: {
      idProceso: {
        type: 'integer',
        description: 'ID del Proceso a eliminar',
      },
    },
    required: ['idProceso'],
  },
  response: {
    200: {
      description: 'Proceso eliminado con éxito',
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Mensaje de éxito' },
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
