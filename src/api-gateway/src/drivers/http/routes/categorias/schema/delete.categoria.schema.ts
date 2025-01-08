import { FastifySchema } from 'fastify';

export const deleteCategoriaSchema: FastifySchema = {
  tags: ['Categoria'],
  summary: 'Eliminar una categoría',
  description: 'Endpoint para eliminar una categoría por ID',
  params: {
    type: 'object',
    properties: {
      idCategoria: {
        type: 'integer',
        description: 'ID de la categoría a eliminar',
      },
    },
    required: ['idCategoria'],
  },
  response: {
    200: {
      description: 'Categoría eliminada con éxito',
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
