import { FastifySchema } from 'fastify';

export const findAllEtiquetaSchema: FastifySchema = {
  tags: ['Etiqueta'],
  summary: 'Obtener todos los Etiquetas',
  description: 'Endpoint para obtener todas las Etiquetas registradas en el sistema',
  response: {
    200: {
      description: 'Lista de Etiquetas encontradas',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idEtiqueta: { type: 'integer', description: 'ID generado para la Etiqueta' },
          nombre: { type: 'string', description: 'Nombre de la Etiqueta' },
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
