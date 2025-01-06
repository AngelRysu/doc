import { createQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';
import { CreationAttributes } from 'sequelize';

type CreateCategoriaData = CreationAttributes<Categoria>;

const createCategoria = async (data: CreateCategoriaData) => {
  return await createQuery(Categoria)(data);
};

export { createCategoria }; 