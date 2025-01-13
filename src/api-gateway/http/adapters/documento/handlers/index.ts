import { createDocumentoHandler } from './create.handlers.documento.adapters';
import { findAllDocumentosHandler } from './findAll.handlers.documento.adapter';
import { findOneDocumentoHandler } from './findOne.handlers.documento.adapter';
import { updateDocumentoHandler } from './update.handlers.documento.adapter';
import { deleteDocumentoHandler } from './delete.handlers.documento.adapter';

export const documentoAdapter = {
    createDocumentoHandler,
    findAllDocumentosHandler,
    findOneDocumentoHandler,
    updateDocumentoHandler,
    deleteDocumentoHandler
}