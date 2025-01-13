import { updateQuery } from 'models/queries';
import { Proceso } from 'models/types/Procesos';
import { Optional } from 'sequelize';

type ProcesoAttributes = {
    idProceso: number;
    clave?: string;
    nombre?: string;
};

type UpdateProcesoData = Optional<ProcesoAttributes, 'idProceso'>;

const updateProceso = async (idProceso: number, data: UpdateProcesoData) => {
  try {
    const [affectedRows] = await updateQuery(Proceso)(data, { idProceso });

    if (affectedRows === 0) {
      return null;
    }

    const ProcesoActualizada = await Proceso.findOne({ where: { idProceso } });

    return ProcesoActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar el Proceso');
  }
};

export { updateProceso };
