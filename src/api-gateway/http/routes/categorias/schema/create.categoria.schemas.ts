import { FastifySchema } from 'fastify';

export const createCategoriaSchema: FastifySchema = {
  tags: ['Categoria'],
  summary: 'Crear una categoría',
  description: 'Endpoint para crear una nueva categoría',
  params: {
    type: 'object',
    properties: {
      idUsuario: {
        type: 'integer',
        description: 'ID del usuario relacionado con la categoría',
      },
    },
    required: ['idUsuario'],
  },
  body: {
    type: 'object',
    required: ['idEtiqueta'], 
    properties: {
      idEtiqueta: {
        type: 'integer',
        description: 'ID de la etiqueta asociada a la categoría',
      },
    },
  },
  response: {
    200: {
      description: 'Categoría creada exitosamente',
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
