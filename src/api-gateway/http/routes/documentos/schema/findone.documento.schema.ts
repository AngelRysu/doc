import { FastifySchema } from 'fastify';

export const findoneDocumentoSchema: FastifySchema = {
  tags: ['Documento'],
  summary: 'Buscar un elemento',
  description: 'Endpoint para buscar un Documento',
  params: {
    type: 'object',
    properties: {
      idDocumento: { 
        type: 'integer', 
        description: 'ID del Documento' 
      },
    },
    required: ['idDocumento'],
  },
  response: {
    200: {
      description: 'Documento encontrado',
      type: 'object',
      properties: {
        idDocumento: { type: 'integer', description: 'ID generado para el Documento' },
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
