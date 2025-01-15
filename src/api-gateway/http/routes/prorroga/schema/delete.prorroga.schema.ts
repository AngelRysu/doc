import { FastifySchema } from 'fastify';

export const deleteProrrogaSchema: FastifySchema = {
  tags: ['Prorroga'],
  summary: 'Eliminar un Prorroga',
  description: 'Endpoint para eliminar un Prorroga por ID',
  params: {
    type: 'object',
    properties: {
      idProrroga: {
        type: 'integer',
        description: 'ID del Prorroga a eliminar',
      },
    },
    required: ['idProrroga'],
  },
  response: {
    200: {
      description: 'Prorroga eliminado con éxito',
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
