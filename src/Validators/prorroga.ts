import { z } from 'zod';

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'La fecha debe estar en formato YYYY-MM-DD'
  })
  .transform((date) => new Date(date));

export const CreateProrrogaSchema = z.object({
  idUsuario: z.number().int().positive({
    message: 'idProceso debe ser un número entero positivo',
  }),
  idDocumento: z.number().int().positive({
    message: 'idDocumennto debe ser un número entero positivo',
  }),
  vencimiento: dateString,
  estado : z.enum(['Elaborado', 'Autorizado'], { message: 'digital debe ser Elaborado, Autorizado' }),
});

export const FindOneProrrogaSchema = z.object({
  idProrroga: z.number().int().positive({
    message: 'idProrroga debe ser un número entero positivo',
  }),
});

export const UpdateProrrogaSchema = z.object({
  idProrroga: z.number().int().positive({
    message: 'idProrroga debe ser un número entero positivo',
  }),
});

export const UpdateProrrogaBodySchema = z.object({
    idUsuario: z.number().int().positive(),
    idDocumento: z.number().int().positive(),
    vencimiento: dateString,
    estado : z.enum(['Elaborado', 'Autorizado']),
});

export const DeleteProrrogaSchema = z.object({
  idProrroga: z.number().int().positive({
    message: 'idProrroga debe ser un número entero positivo',
  }),
});

export const FindAllProrrogaSchema = z.object({
    idUsuario: z.number().int().positive().optional(),
    idDocumento: z.number().int().positive().optional(),
    vencimiento: dateString.optional(),
    estado: z.enum(['Elaborado', 'Autorizado']).optional(),    
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
