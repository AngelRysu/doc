import { createEtiquetaHandler } from './create.handlers.etiqueta.adapter';
import { findAllEtiquetasHandler } from './findAll.handlers.etiqueta.adapter';
import { findOneEtiquetaHandler } from './findOne.handlers.etiqueta.adapter';
import { updateEtiquetaHandler } from './update.handlers.etiqueta.adapter';
import { deleteEtiquetaHandler } from './delete.handlers.etiqueta.adapter';

export const etiqueraAdapter ={
    createEtiquetaHandler,
    findAllEtiquetasHandler,
    findOneEtiquetaHandler,
    updateEtiquetaHandler,
    deleteEtiquetaHandler
}