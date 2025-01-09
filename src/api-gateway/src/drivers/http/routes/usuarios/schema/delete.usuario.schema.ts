import { FastifySchema } from 'fastify';

export const deleteUsuarioSchema: FastifySchema = {
  tags: ['Usuario'],
  summary: 'Eliminar un usuario',
  description: 'Endpoint para eliminar un usuario por ID',
  params: {
    type: 'object',
    properties: {
      idUsuario: {
        type: 'integer',
        description: 'ID del usuario a eliminar',
      },
    },
    required: ['idUsuario'],
  },
  response: {
    200: {
      description: 'Usuario eliminado con éxito',
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
