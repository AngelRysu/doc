import { z } from 'zod';

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'La fecha debe estar en formato YYYY-MM-DD'
  })
  .transform((date) => new Date(date));

export const CreateExpedienteSchema = z.object({
  idDocumento: z.number().int().positive(),
  idUsuario: z.number().int().positive(),
  fecha: dateString,
  url: z.string(),
  estado : z.enum(['Activo', 'Inactivo']),
});

export const FindOneExpedienteSchema = z.object({
  idExpediente: z.number().int().positive({
    message: 'idExpediente debe ser un número entero positivo',
  }),
});

export const UpdateExpedienteSchema = z.object({
  idExpediente: z.number().int().positive({
    message: 'idExpediente debe ser un número entero positivo',
  }),
});

export const UpdateExpedienteBodySchema = z.object({
    idDocumento: z.number().int().positive(),
    idUsuario: z.number().int().positive(),
    fecha: dateString,
    estado : z.enum(['Activo', 'Inactivo']),
});

export const DeleteExpedienteSchema = z.object({
  idExpediente: z.number().int().positive({
    message: 'idExpediente debe ser un número entero positivo',
  }),
});

export const FindAllExpedienteSchema = z.object({
    idDocumento: z.number().int().positive().optional(),
    idUsuario: z.number().int().positive().optional(),
    fecha: dateString.optional(),
    url: z.string().optional(),
    estado : z.enum(['Activo', 'Inactivo']).optional(),
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
