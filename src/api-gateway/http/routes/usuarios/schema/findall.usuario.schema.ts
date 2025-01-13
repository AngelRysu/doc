import { FastifySchema } from 'fastify';

export const findAllUsuarioSchema: FastifySchema = {
  tags: ['Usuario'],
  summary: 'Obtener todos los usuarios',
  description: 'Endpoint para obtener todos los usuarios registradas en el sistema',
  response: {
    200: {
      description: 'Lista de usuarios encontrados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idUsuario: { type: 'integer', description: 'ID generado para el usuario' },
          curp: { type: 'string', description: 'Curp del usuario' },
          nombre: { type: 'string', description: 'Nombre del usuario' },
          primerApellido: { type: 'string', description: 'Primer apellido del usuario' },
          segundoApellido: { type: 'string', description: 'Segundo apellido del usuario' },
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
