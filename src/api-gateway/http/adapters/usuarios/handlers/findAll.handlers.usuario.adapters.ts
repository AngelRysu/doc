import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllUsuarioSchema } from 'validators/usuario';
import { findAllUsuarios } from '../../../use-cases/usuarios';
import { handleError } from '../../../utils/error.handler';

export const findAllUsuariosHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllUsuarioSchema.parse(request.query);

    const usuarios = await findAllUsuarios();

    if (!usuarios || usuarios.length === 0) {
      reply.code(404).send({ error: 'No se encontraron usuarios' });
      return;
    }

    reply.code(200).send(usuarios);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
