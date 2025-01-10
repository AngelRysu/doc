import { createCategoriaHandler } from './create.handlers.categoria.adapters';
import { findOneCategoriaHandler } from './findOne.handlers.categoria.adapters';
import { findAllCategoriaHandler } from './findAll.handlers.categoria.adapters';
import { deleteCategoriaHandler } from './delete.handlers.categoria.adapters';
import { updateCategoriaHandler } from './update.handlers.categoria.adapters';

export const categoriaAdapter ={
    createCategoriaHandler,
    findOneCategoriaHandler,
    findAllCategoriaHandler,
    deleteCategoriaHandler,
    updateCategoriaHandler
};