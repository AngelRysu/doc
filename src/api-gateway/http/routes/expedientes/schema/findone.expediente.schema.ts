import { FastifySchema } from 'fastify';

export const findoneExpedienteSchema: FastifySchema = {
  tags: ['Expediente'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar un Expediente',
  params: {
    type: 'object',
    properties: {
      idExpediente: { 
        type: 'integer', 
        description: 'ID del Expediente' 
      },
    },
    required: ['idExpediente'],
  },
  response: {
    200: {
      description: 'Expediente encontrado',
      type: 'object',
      properties: {
        idExpediente: { type: 'integer', description: 'ID generado para el Expediente' },
        idDocumento: { type: 'integer', description: 'ID del Documento que soporta el Expediente' },
        idUsuario: { type: 'integer', description: 'ID del Usuario al que pertenece el Expediente' },
        fecha: { type: 'string', description: 'Indica cuando vence la Expediente' },
        url: { type: 'string', description: 'indica la direccion del Expediente' },
        estado: { type: 'string', description: 'indica el estado de la Expediente' },
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
