import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneUsuarioSchema } from 'validators/usuario'; 
import { findOneUsuario } from '../../../use-cases/usuarios';
import { handleError } from '../../../utils/error.handler';

export const findOneUsuarioHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idUsuario } = FindOneUsuarioSchema.parse(request.params);

    const usuario = await findOneUsuario({ idUsuario });

    if (!usuario) {
      reply.code(404).send({ error: 'Usuario no encontrado' });
      return;
    }

    reply.code(200).send(usuario);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
