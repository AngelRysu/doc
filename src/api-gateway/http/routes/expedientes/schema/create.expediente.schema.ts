import { FastifySchema } from 'fastify';
import { expediente } from './propeties/expediente';

export const createExpedienteSchema: FastifySchema = {
  tags: ['Expediente'],
  summary: 'Crear un registro de Expediente',
  description: 'Endpoint para crear un registro de Expediente',
  body: {
    type: 'object',
    properties: expediente,
  },
  response: {
    200: {
      description: 'Expediente registrado correctamente',
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
