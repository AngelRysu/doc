import { updateQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';
import { Optional } from 'sequelize';

// Definir los atributos de Categoria
interface CategoriaAttributes {
  idCategoria: number;
  idEtiqueta: number;
  idUsuario: number;
}

type UpdateCategoriaData = Optional<CategoriaAttributes, 'idCategoria'>;

const updateCategoria = async (idCategoria: number, data: UpdateCategoriaData) => {
  return await updateQuery(Categoria)(idCategoria, data);
};

export {updateCategoria};
