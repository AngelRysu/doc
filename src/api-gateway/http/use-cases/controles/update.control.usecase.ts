import { updateQuery } from 'models/queries';
import { Control } from 'models/types/Control';
import { Optional } from 'sequelize';

interface ControlAttributes {
  idControl: number;
  idProceso?: number;
  idDocumento?: number;
  obligatorio?: string;
  digital?: string;
}

type UpdateControlData = Optional<ControlAttributes, 'idControl'>;

const updateControl = async (idControl: number, data: UpdateControlData) => {
  try {
    const [affectedRows] = await updateQuery(Control)(data, { idControl });

    if (affectedRows === 0) {
      return null;
    }

    const controlActualizada = await Control.findOne({ where: { idControl } });

    return controlActualizada;
  } catch (error) {
    console.error('Error en updateControl:', error);
    throw new Error('Error al actualizar el control');
  }
};

export { updateControl };


