import { FastifySchema } from 'fastify';

export const findAllCategoriaSchema: FastifySchema = {
  tags: ['Categoria'],
  summary: 'Obtener todas las categorías',
  description: 'Endpoint para obtener todas las categorías registradas en el sistema',
  response: {
    200: {
      description: 'Lista de categorías encontradas',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idCategoria: { type: 'integer', description: 'ID generado para la categoría' },
          idEtiqueta: { type: 'integer', description: 'ID de la etiqueta asociada' },
          idUsuario: { type: 'integer', description: 'ID del usuario asociado' },
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
