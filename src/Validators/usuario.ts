import { z } from 'zod';

export const CreateUsuarioSchema = z.object({
  curp: z.string().min(18, { message: 'curp debe ser una cadena con al menos 18 caracteres' }),
  nombre: z.string().min(1, { message: 'nombre es obligatorio' }),
  primerApellido: z.string().min(1, { message: 'primerApellido es obligatorio' }),
  segundoApellido: z.string().min(1, { message: 'segundoApellido es obligatorio' }),
});

export const FindOneUsuarioSchema = z.object({
  idUsuario: z.number().int().positive({
    message: 'idUsuario debe ser un número entero positivo',
  }),
});

export const UpdateUsuarioSchema = z.object({
  idUsuario: z.number().int().positive({
    message: 'idUsuario debe ser un número entero positivo',
  }),
});

export const UpdateUsuarioBodySchema = z.object({
  curp: z.string().min(18).optional(),
  nombre: z.string().min(1).optional(),
  primerApellido: z.string().min(1).optional(),
  segundoApellido: z.string().min(1).optional(),
});

export const DeleteUsuarioSchema = z.object({
  idUsuario: z.number().int().positive({
    message: 'idUsuario debe ser un número entero positivo',
  }),
});

export const FindAllUsuarioSchema = z.object({
  curp: z.string().optional(),
  nombre: z.string().optional(),
  primerApellido: z.string().optional(),
  segundoApellido: z.string().optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});

export type CreateUsuarioDto = z.infer<typeof CreateUsuarioSchema>;
export type FindOneUsuarioDto = z.infer<typeof FindOneUsuarioSchema>;
export type UpdateUsuarioDto = z.infer<typeof UpdateUsuarioSchema>;
export type UpdateUsuarioBodyDto = z.infer<typeof UpdateUsuarioBodySchema>;
export type DeleteUsuarioDto = z.infer<typeof DeleteUsuarioSchema>;
export type FindAllUsuarioDto = z.infer<typeof FindAllUsuarioSchema>;
