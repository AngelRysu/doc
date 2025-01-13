import { updateQuery } from 'models/queries';
import { Etiqueta } from 'models/types/Etiquetas';
import { Optional } from 'sequelize';

type EtiquetaAttributes = {
    idEtiqueta: number;
    nombre?: string;
};

type UpdateEtiquetaData = Optional<EtiquetaAttributes, 'idEtiqueta'>;

const updateEtiqueta = async (idEtiqueta: number, data: UpdateEtiquetaData) => {
  try {
    const [affectedRows] = await updateQuery(Etiqueta)(data, { idEtiqueta });

    if (affectedRows === 0) {
      return null;
    }

    const etiquetaActualizada = await Etiqueta.findOne({ where: { idEtiqueta } });

    return etiquetaActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar la etiqueta');
  }
};

export { updateEtiqueta };


