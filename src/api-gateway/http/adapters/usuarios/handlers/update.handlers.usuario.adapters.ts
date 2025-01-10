import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateUsuarioBodySchema, UpdateUsuarioSchema } from 'Validators/usuario'; 
import { updateUsuario } from '../../../use-cases/usuarios';
import { handleError } from '../../../utils/error.handler';

export const updateUsuarioHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idUsuario } = UpdateUsuarioSchema.parse(request.params); 
    const { curp, nombre, primerApellido, segundoApellido } = UpdateUsuarioBodySchema.parse(request.body); 

    const usuarioActualizado = await updateUsuario(idUsuario, { curp, nombre, primerApellido, segundoApellido });

    reply.code(200).send(usuarioActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
