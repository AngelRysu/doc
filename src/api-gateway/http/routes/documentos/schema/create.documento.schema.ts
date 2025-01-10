import { FastifySchema } from 'fastify';

export const createDocumentoSchema: FastifySchema = {
  tags: ['Documento'],
  summary: 'Crear un registro de documento',
  description: 'Endpoint para crear un registro de documentos',
  body: {
    type: 'object',
    required: ['clave', 'nombre', 'tipo'],
    properties: {
      clave: {
        type: 'string',
        description: 'Clave del documento',
      },
      nombre: {
        type: 'string',
        description: 'Nombre del documento',
      },
      tipo: {
        type: 'string',
        enum: ['pdf','doc','jpg'],
        description: 'Tipo de archivo',
      },
    },
  },
  response: {
    200: {
      description: 'Documento registrado correctamente',
      type: 'object',
      properties: {
        idDocumento: { type: 'integer', description: 'ID generado para el documento' },
        clave: { type: 'string', description: 'Clave del documento' },
        nombre: { type: 'string', description: 'Nombre del documento' },
        tipo: { type: 'string', description: 'Tipo de documento' },
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
