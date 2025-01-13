import { createProcesoHandler } from './create.handlers.proceso.adapters';
import { deleteProcesoHandler } from './delete.handlers.proceso.adapters';
import { findAllProcesoHandler } from './findAll.handlers.proceso.adapter';
import { findOneProcesoHandler } from './findOne.handlers.proceso.adapters';
import { updateProcesoHandler } from './update.handlers.proceso.adapter';

export const procesoAdapter = {
    createProcesoHandler,
    deleteProcesoHandler,
    findAllProcesoHandler,
    findOneProcesoHandler,
    updateProcesoHandler
};