import { FastifyReply, FastifyRequest } from 'fastify';
import { createCategoria } from '../../../use-cases/categorias';
import { CreateCategoriaSchema } from 'Validators/categoria';
import { handleError } from '../../../utils/error.handler';

export const createCategoriaHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      // Validar el cuerpo de la solicitud con Zod
      const data = CreateCategoriaSchema.parse(request.body);
  
      // Ejecutar el caso de uso para crear la categoría
      const newCategoria = await createCategoria(data);
  
      // Responder con la categoría creada
      reply.code(201).send(newCategoria);
    } catch (err: unknown) {
      // Convertir el error a un tipo manejable
      const error = err instanceof Error ? err : new Error('Unknown error');
      handleError({ reply, error });
    }
  };
