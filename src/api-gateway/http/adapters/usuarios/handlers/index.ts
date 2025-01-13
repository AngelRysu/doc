import { createUsuarioHandler } from './create.handlers.usuario.adapters'
import { deleteUsuarioHandler } from './delete.handlers.usuario.adapters'
import { findAllUsuariosHandler } from './findAll.handlers.usuario.adapters'
import { findOneUsuarioHandler } from './findOne.handlers.usuario.adapters'
import { updateUsuarioHandler } from './update.handlers.usuario.adapters'

export const usuarioAdapter ={
    createUsuarioHandler,
    deleteUsuarioHandler,
    findAllUsuariosHandler,
    findOneUsuarioHandler,
    updateUsuarioHandler
}