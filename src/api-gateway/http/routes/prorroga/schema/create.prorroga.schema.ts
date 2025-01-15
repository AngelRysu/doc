import { FastifySchema } from 'fastify';
import { prorroga } from './propeties/prorroga';

export const createProrrogaSchema: FastifySchema = {
  tags: ['Prorroga'],
  summary: 'Crear un registro de Prorroga',
  description: 'Endpoint para crear un registro de Prorroga',
  body: {
    type: 'object',
    properties: prorroga,
  },
  response: {
    200: {
      description: 'Prorroga registrado correctamente',
      type: 'object',
      properties: {
        idProrroga: { type: 'integer', description: 'ID generado para el Prorroga' },
        idUsuario: { type: 'integer', description: 'ID del Usuario al que pertenece el Prorroga' },
        idDocumento: { type: 'integer', description: 'ID del Documento que soporta el Prorroga' },
        vencimiento: { type: 'string', description: 'Indica cuando vence la prorroga' },
        estado: { type: 'string', description: 'indica el estado de la prorroga' },
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
