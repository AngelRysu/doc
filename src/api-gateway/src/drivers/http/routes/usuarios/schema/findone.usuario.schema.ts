import { FastifySchema } from 'fastify';

export const findoneUsuarioSchema: FastifySchema = {
  tags: ['Usuario'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar un usuario',
  params: {
    type: 'object',
    properties: {
      idUsuario: { 
        type: 'integer', 
        description: 'ID del usuario' 
      },
    },
    required: ['idUsuario'],
  },
  response: {
    200: {
      description: 'Usuario encontrado',
      type: 'object',
      properties: {
        idUsuario: { type: 'integer', description: 'ID generado para el usuario' },
        curp: { type: 'string', description: 'Curp del usuario' },
        nombre: { type: 'string', description: 'Nombre del usuario' },
        primerApellido: { type: 'string', description: 'Primer apellido del usuario' },
        segundoApellido: { type: 'string', description: 'Segundo apellido del usuario' },
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
