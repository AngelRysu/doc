import { z } from 'zod';

export const CreateCategoriaSchema = z.object({
  idEtiqueta: z.number().int().positive({
    message: "idEtiqueta debe ser un número entero positivo",
  }),
  idUsuario: z.number().int().positive({
    message: "idUsuario debe ser un número entero positivo",
  }),
});

export type CreateCategoriaDto = z.infer<typeof CreateCategoriaSchema>;
