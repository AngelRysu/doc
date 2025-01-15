import { FastifySchema } from 'fastify';
import { prorroga } from './propeties/prorroga';

export const updateProrrogaSchema: FastifySchema = {
  tags: ['Prorroga'],
  summary: 'Modificar un Prorroga',
  description: 'Endpoint para modificar un Prorroga existente.',
  params: {
    type: 'object',
    properties: {
      idProrroga: {
        type: 'integer',
        description: 'ID del Prorroga que se desea modificar',
      },
    },
    required: ['idProrroga'],
  },
  body: {
    type: 'object',
    properties: prorroga
  },
  response: {
    200: {
        description: 'Prorroga encontrado exitosamente',
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
