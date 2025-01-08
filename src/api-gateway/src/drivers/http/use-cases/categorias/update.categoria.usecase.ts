import { updateQuery } from 'models/queries';
import { Categoria } from 'models/expediente/Categorias';
import { Optional } from 'sequelize';

interface CategoriaAttributes {
  idCategoria: number;
  idEtiqueta?: number;
  idUsuario: number;
}

type UpdateCategoriaData = Optional<CategoriaAttributes, 'idCategoria'>;

const updateCategoria = async (idCategoria: number, data: UpdateCategoriaData) => {
  try {
    const [affectedRows] = await updateQuery(Categoria)(data, { idCategoria });

    if (affectedRows === 0) {
      return null;
    }

    const categoriaActualizada = await Categoria.findOne({ where: { idCategoria } });

    return categoriaActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar la categoría');
  }
};

export { updateCategoria };


