import { FastifySchema } from 'fastify';

export const findAllDocumentoSchema: FastifySchema = {
  tags: ['Documento'],
  summary: 'Obtener todos los Documentos',
  description: 'Endpoint para obtener todos los Documentos registradas en el sistema',
  response: {
    200: {
      description: 'Lista de Documentos encontrados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
            idDocumento: { type: 'integer', description: 'ID generado para el Documento' },
            clave: { type: 'string', description: 'Clave del documento' },
            nombre: { type: 'string', description: 'Nombre del documento' },
            tipo: { type: 'string', description: 'Tipo de documento' },
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
