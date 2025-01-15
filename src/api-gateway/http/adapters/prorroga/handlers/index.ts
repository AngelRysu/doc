import { createProrrogaHandler } from './create.handlers.prorroga.adapter';
import { findAllProrrogaHandler } from './findAll.handlers.prorroga.adapter';
import { findOneProrrogaHandler } from './findOne.handles.prorroga.adapter';
import { deleteProrrogaHandler } from './delete.handlers.prorroga.adapter';



export const prorrogaAdapter = {
  createProrrogaHandler,
  findAllProrrogaHandler,
  findOneProrrogaHandler,
  deleteProrrogaHandler,
};