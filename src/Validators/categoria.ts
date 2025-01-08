import { z } from 'zod';

export const CreateCategoriaSchema = z.object({
  idUsuario: z.number().int().positive({
    message: 'idUsuario debe ser un número entero positivo',
  }),
  idEtiqueta: z.number().int().positive({
    message: 'idEtiqueta debe ser un número entero positivo',
  }),
});

export const FindOneCategoriaSchema = z.object({
  idCategoria: z.number().int().positive({
    message: 'idCategoria debe ser un número entero positivo',
  }),
});

export const UpdateCategoriaSchema = z.object({
  idCategoria: z.number().int().positive({
    message: 'idCategoria debe ser un número entero positivo',
  }),
});

export const UpdateCategoriaBodySchema = z.object({
  idEtiqueta: z.number().int().positive().optional(),
  idUsuario: z.number().positive({
    message: 'idUsuario debe ser un número entero positivo',
  }),
});

export const DeleteCategoriaSchema = z.object({
  idCategoria: z.number().int().positive({
    message: 'idCategoria debe ser un número entero positivo',
  }),
});

export const FindAllCategoriaSchema = z.object({
  idEtiqueta: z.number().int().positive().optional(), 
  idUsuario: z.number().int().positive().optional(),  
  page: z.number().int().min(1).optional(),           
  limit: z.number().int().min(1).optional(),          
  sort: z.enum(['asc', 'desc']).optional(),           
});
