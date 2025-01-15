import { FastifySchema } from 'fastify';

export const deleteExpedienteSchema: FastifySchema = {
  tags: ['Expediente'],
  summary: 'Eliminar un Expediente',
  description: 'Endpoint para eliminar un Expediente por ID',
  params: {
    type: 'object',
    properties: {
      idExpediente: {
        type: 'integer',
        description: 'ID del Expediente a eliminar',
      },
    },
    required: ['idExpediente'],
  },
  response: {
    200: {
      description: 'Expediente eliminado con éxito',
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
