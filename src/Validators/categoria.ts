import { z } from 'zod';

// Esquema para la creación de una categoría
export const CreateCategoriaSchema = z.object({
  idEtiqueta: z.number().int().positive({
    message: 'idEtiqueta debe ser un número entero positivo',
  }),
  idUsuario: z.number().int().positive({
    message: 'idUsuario debe ser un número entero positivo',
  }),
});

// Esquema para buscar una categoría por ID
export const FindOneCategoriaSchema = z.object({
  idCategoria: z.number().int().positive({
    message: 'idCategoria debe ser un número entero positivo',
  }),
});

// Esquema para actualizar una categoría (puede tener campos opcionales)
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

// Esquema para eliminar una categoría por ID
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

export type CreateCategoriaDto = z.infer<typeof CreateCategoriaSchema>;
export type FindOneCategoriaDto = z.infer<typeof FindOneCategoriaSchema>;
export type UpdateCategoriaDto = z.infer<typeof UpdateCategoriaSchema>;
export type UpdateCategoriaBodyDto = z.infer<typeof UpdateCategoriaBodySchema>;
export type DeleteCategoriaDto = z.infer<typeof DeleteCategoriaSchema>;
export type FindAllCategoriaDto = z.infer<typeof FindAllCategoriaSchema>;
