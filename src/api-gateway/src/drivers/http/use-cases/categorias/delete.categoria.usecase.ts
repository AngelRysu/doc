type CategoriaAttributes = {
  idCategoria: number;
};

type DeleteCategoriaData = Partial<CategoriaAttributes>;

import { deleteQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';

const deleteCategoria = async (where: DeleteCategoriaData) => {
  return await deleteQuery(Categoria)(where);
};

export { deleteCategoria };