import { updateQuery } from 'models/queries';
import { Prorroga } from 'models/types/Prorrogas';
import { Optional } from 'sequelize';

type ProrrogaAttributes = {
    idProrroga: number;
    idUsuario?: number;
    idDocumento?: number;
    vencimiento?: Date;
    estado?: string;
};

type UpdateProrrogaData = Optional<ProrrogaAttributes, 'idProrroga'>;

const updateProrroga = async (idProrroga: number, data: UpdateProrrogaData) => {
  try {
    const [affectedRows] = await updateQuery(Prorroga)(data, { idProrroga });

    if (affectedRows === 0) {
      return null;
    }

    const ProrrogaActualizada = await Prorroga.findOne({ where: { idProrroga } });

    return ProrrogaActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar el Prorroga');
  }
};

export { updateProrroga };


