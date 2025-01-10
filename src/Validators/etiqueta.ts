import { z } from 'zod';

export const CreateEtiquetaSchema = z.object({
  nombre: z.string().min(1, { message: 'nombre es obligatorio' }),
});

export const FindOneEtiquetaSchema = z.object({
  idEtiqueta: z.number().int().positive({
    message: 'idEtiqueta debe ser un número entero positivo',
  }),
});

export const UpdateEtiquetaSchema = z.object({
  idEtiqueta: z.number().int().positive({
    message: 'idEtiqueta debe ser un número entero positivo',
  }),
});

export const UpdateEtiquetaBodySchema = z.object({
  nombre: z.string().min(1).optional(),
});

export const DeleteEtiquetaSchema = z.object({
  idEtiqueta: z.number().int().positive({
    message: 'idEtiqueta debe ser un número entero positivo',
  }),
});

export const FindAllEtiquetaSchema = z.object({
  nombre: z.string().optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});
