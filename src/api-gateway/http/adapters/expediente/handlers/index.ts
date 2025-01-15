import { createExpedienteHandler } from './create.handlers.expediente.adapter'
//import { deleteExpedienteHandler } from './delete.handlers.expediente.adapter'
import { findAllProrrogaHandler } from './findAll.hanndlers.expediente.adapter'
import { findOneExpedienteHandler } from './findOne.handlers.expediennte.adapter'

//import { updateExpedienteHandler } from './update.handlers.expediente.adapter'

export const expedienteAdapter = {
  createExpedienteHandler,
  //deleteExpedienteHandler,
  findAllProrrogaHandler,
  findOneExpedienteHandler,
  //updateExpedienteHandler
};