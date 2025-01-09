import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteUsuarioSchema } from 'Validators/usuario';
import { deleteUsuario } from '../../../use-cases/usuarios';
import { handleError } from '../../../utils/error.handler';

export const deleteUsuarioHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idUsuario } = DeleteUsuarioSchema.parse(request.params);

    const isDeleted = await deleteUsuario({ idUsuario });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Usuario no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Usuario eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
