import { findOneQuery, createQuery } from 'models/queries';
import { Categoria } from 'models/types/Categorias';
import { CreationAttributes } from 'sequelize';

type CreateCategoriaData = CreationAttributes<Categoria>;

const createCategoria = async (data: CreateCategoriaData) => {
  const existingCategoria = await findOneQuery(Categoria)({
    idUsuario: data.idUsuario,
    idEtiqueta: data.idEtiqueta,
  });

  if (existingCategoria) {
    throw new Error('La combinación de idUsuario e idEtiqueta ya existe');
  }

  return await createQuery(Categoria)(data);
};

export { createCategoria };
