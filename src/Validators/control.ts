import { z } from 'zod';

export const CreateControlSchema = z.object({
  idProceso: z.number().int().positive({
    message: 'idProceso debe ser un número entero positivo',
  }),
  idDocumento: z.number().int().positive({
    message: 'idDocumennto debe ser un número entero positivo',
  }),
  obligatorio: z.enum(['S', 'N'], { message: 'obligatorio debe ser: S, N' }),
  digital: z.enum(['S', 'N'], { message: 'digital debe ser S, N' }),
});

export const FindOneControlSchema = z.object({
  idControl: z.number().int().positive({
    message: 'idControl debe ser un número entero positivo',
  }),
});

export const UpdateControlSchema = z.object({
  idControl: z.number().int().positive({
    message: 'idControl debe ser un número entero positivo',
  }),
});

export const UpdateControlBodySchema = z.object({
    idProceso: z.number().int().positive().optional(),
    idDocumento: z.number().positive().optional(),
    obligatorio: z.enum(['S', 'N']).optional(),
    digital: z.enum(['S', 'N']).optional(),
});

export const DeleteControlSchema = z.object({
  idControl: z.number().int().positive({
    message: 'idControl debe ser un número entero positivo',
  }),
});

export const FindAllControlSchema = z.object({
    idProceso: z.number().int().positive().optional(),
    idDocumento: z.number().int().positive().optional(),
    obligatorio: z.enum(['S', 'N']).optional(),
    digital: z.enum(['S', 'N']).optional(),    
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
