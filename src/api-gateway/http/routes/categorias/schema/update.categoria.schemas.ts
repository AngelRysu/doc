import { FastifySchema } from 'fastify';

export const updateCategoriaSchema: FastifySchema = {
  tags: ['Categoria'],
  summary: 'Modificar una categoría',
  description: 'Endpoint para modificar una categoría existente.',
  params: {
    type: 'object',
    properties: {
      idCategoria: {
        type: 'integer',
        description: 'ID de la categoría que se desea modificar',
      },
    },
    required: ['idCategoria'],
  },
  body: {
    type: 'object',
    properties: {
      idEtiqueta: {
        type: 'integer',
        description: 'ID de la etiqueta asociada a la categoría (opcional)',
      },
      idUsuario: {
        type: 'integer',
        description: 'ID del usuario asociado a la categoría (opcional)',
      },
    },
    required: ['idUsuario'],
  },
  response: {
    200: {
      description: 'Categoría modificada exitosamente',
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
