type CategoriaAttributes = {
  idCategoria: number;
  idEtiqueta: number;
  idUsuario: number;
};

type FindOneCategoriaData = Partial<CategoriaAttributes>;

import { findOneQuery } from 'models/queries';
import { Categoria } from 'models/types/Categorias';

const findOneCategoria = async (where: FindOneCategoriaData) => {
  return await findOneQuery(Categoria)(where);
};

export { findOneCategoria };
