import { FastifyReply, FastifyRequest } from 'fastify';
import { createUsuario } from '../../../use-cases/usuarios';
import { CreateUsuarioSchema } from 'validators/usuario';
import { handleError } from '../../../utils/error.handler';

export const createUsuarioHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateUsuarioSchema.parse(request.body);
    const newUsuario = await createUsuario(data);
    reply.code(201).send(newUsuario);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
