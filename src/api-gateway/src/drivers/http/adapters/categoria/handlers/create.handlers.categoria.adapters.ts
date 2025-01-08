import { FastifyReply, FastifyRequest } from 'fastify';
import { createCategoria } from '../../../use-cases/categorias';
import { CreateCategoriaSchema } from 'Validators/categoria';
import { handleError } from '../../../utils/error.handler';

interface CreateCategoriaParams {
  idUsuario: string; 
}

interface CreateCategoriaBody {
  idEtiqueta: number; 
}

export const createCategoriaHandler = async (
  request: FastifyRequest<{ Params: CreateCategoriaParams; Body: CreateCategoriaBody }>, 
  reply: FastifyReply
) => {
  try {
    const { idUsuario } = request.params;

    const data = CreateCategoriaSchema.parse({
      ...request.body,  
      idUsuario: Number(idUsuario), 
    });

    const newCategoria = await createCategoria(data);

    reply.code(201).send(newCategoria);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
