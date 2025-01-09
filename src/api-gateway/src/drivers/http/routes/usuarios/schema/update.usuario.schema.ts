import { FastifySchema } from 'fastify';

export const updateUsuarioSchema: FastifySchema = {
  tags: ['Usuario'],
  summary: 'Modificar un usuario',
  description: 'Endpoint para modificar un usuario existente.',
  params: {
    type: 'object',
    properties: {
      idUsuario: {
        type: 'integer',
        description: 'ID del usuario que se desea modificar',
      },
    },
    required: ['idUsuario'],
  },
  body: {
    type: 'object',
    required: ['curp', 'nombre', 'primerApellido', 'segundoApellido'],
    properties: {
      curp: {
        type: 'string',
        description: 'CURP del usuario, debe ser único y tener al menos 18 caracteres',
        minLength: 18,
      },
      nombre: {
        type: 'string',
        description: 'Nombre del usuario',
      },
      primerApellido: {
        type: 'string',
        description: 'Primer apellido del usuario',
      },
      segundoApellido: {
        type: 'string',
        description: 'Segundo apellido del usuario',
      },
    },
  },
  response: {
    200: {
        description: 'Usuario encontrado exitosamente',
        type: 'object',
        properties: {
          idUsuario: { type: 'integer', description: 'ID generado para el usuario' },
          curp: { type: 'string', description: 'CURP del usuario' },
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
