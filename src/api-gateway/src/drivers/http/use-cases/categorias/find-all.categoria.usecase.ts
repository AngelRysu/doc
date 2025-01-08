import { findAllQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';

type FindAllCategoriasData = Partial<Categoria>;

const findAllCategorias = async (where?: FindAllCategoriasData) => {
  return await findAllQuery(Categoria)(where);
};

export { findAllCategorias };