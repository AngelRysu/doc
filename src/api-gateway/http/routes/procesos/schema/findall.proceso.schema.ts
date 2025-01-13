import { FastifySchema } from 'fastify';

export const findAllProcesoSchema: FastifySchema = {
  tags: ['Proceso'],
  summary: 'Obtener todos los Procesos',
  description: 'Endpoint para obtener todos los Procesos registradas en el sistema',
  response: {
    200: {
      description: 'Lista de Procesos encontrados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
            idProceso: { type: 'integer', description: 'ID generado para el Proceso' },
            clave: { type: 'string', description: 'Clave del Proceso' },
            nombre: { type: 'string', description: 'Nombre del Proceso' },
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
