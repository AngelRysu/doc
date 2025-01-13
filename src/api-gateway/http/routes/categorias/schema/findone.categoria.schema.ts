import { FastifySchema } from 'fastify';

export const findoneCategoriaSchema: FastifySchema = {
  tags: ['Categoria'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar un elemento en categoria',
  params: {
    type: 'object',
    properties: {
      idCategoria: { 
        type: 'integer', 
        description: 'ID de la categoría' 
      },
    },
    required: ['idCategoria'],
  },
  response: {
    200: {
      description: 'Categoría encontrada',
      type: 'object',
      properties: {
        idCategoria: { type: 'integer', description: 'ID generado para la categoría' },
        idEtiqueta: { type: 'integer', description: 'ID de la etiqueta asociada' },
        idUsuario: { type: 'integer', description: 'ID del usuario asociado' },
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
