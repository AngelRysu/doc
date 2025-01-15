import { FastifySchema } from 'fastify';

export const findAllProrrogaSchema: FastifySchema = {
  tags: ['Prorroga'],
  summary: 'Obtener todos los Prorrogas',
  description: 'Endpoint para obtener todos los Prorrogas registradas en el sistema',
  response: {
    200: {
      description: 'Lista de Prorrogas encontrados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
            idProrroga: { type: 'integer', description: 'ID generado para el Prorroga' },
            idUsuario: { type: 'integer', description: 'ID del Usuario al que pertenece el Prorroga' },
            idDocumento: { type: 'integer', description: 'ID del Documento que soporta el Prorroga' },
            vencimiento: { type: 'string', description: 'Indica cuando vence la prorroga' },
            estado: { type: 'string', description: 'indica el estado de la prorroga' },
        },
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
