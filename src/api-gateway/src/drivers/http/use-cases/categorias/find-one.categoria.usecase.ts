import { findOneQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';

type FindOneCategoriaData = Partial<Categoria>;

const findOneCategoria = async (where: FindOneCategoriaData) => {
  return await findOneQuery(Categoria)(where);
};

export { findOneCategoria };