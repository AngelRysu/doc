import { deleteQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';

const deleteCategoria = async (where: Partial<Categoria>) => {
  return await deleteQuery(Categoria)(where);
};

export { deleteCategoria };