import { z } from 'zod';

export const CreateProcesoSchema = z.object({
  clave: z.string().min(1, { message: 'clave es obligatorio' }),
  nombre: z.string().min(1, { message: 'nombre es obligatorio' }),
});

export const FindOneProcesoSchema = z.object({
  idProceso: z.number().int().positive({
    message: 'idProceso debe ser un número entero positivo',
  }),
});

export const UpdateProcesoSchema = z.object({
  idProceso: z.number().int().positive({
    message: 'idProceso debe ser un número entero positivo',
  }),
});

export const UpdateProcesoBodySchema = z.object({
  clave: z.string().min(1).optional(),
  nombre: z.string().min(1).optional(),
});

export const DeleteProcesoSchema = z.object({
  idProceso: z.number().int().positive({
    message: 'idProceso debe ser un número entero positivo',
  }),
});

export const FindAllProcesosSchema = z.object({
  clave: z.string().min(1).optional(),
  nombre: z.string().optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});
