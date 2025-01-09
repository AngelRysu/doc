import { z } from 'zod';

export const CreateDocumentoSchema = z.object({
  clave: z.string().min(1, { message: 'clave es obligatoria' }),
  nombre: z.string().min(1, { message: 'nombre es obligatorio' }),
  tipo: z.enum(['pdf', 'doc', 'jpg'], { message: 'tipo debe ser: pdf, doc, jpg' }),
});

export const FindOneDocumentoSchema = z.object({
  idDocumento: z.number().int().positive({
    message: 'idDocumento debe ser un número entero positivo',
  }),
});

export const UpdateDocumentoSchema = z.object({
  idDocumento: z.number().int().positive({
    message: 'idDocumento debe ser un número entero positivo',
  }),
});

export const UpdateDocumentoBodySchema = z.object({
  clave: z.string().min(1).optional(),
  nombre: z.string().min(1).optional(),
  tipo: z.enum(['pdf', 'doc', 'jpg']).optional(),
});

export const DeleteDocumentoSchema = z.object({
  idDocumento: z.number().int().positive({
    message: 'idDocumento debe ser un número entero positivo',
  }),
});

export const FindAllDocumentoSchema = z.object({
  clave: z.string().optional(),
  nombre: z.string().optional(),
  tipo: z.enum(['pdf', 'doc', 'jpg']).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});
