import { updateQuery } from 'models/queries';
import { Expediente } from 'models/types/Expedientes';
import { Optional } from 'sequelize';

type ExpedienteAttributes = {
    idExpediente: number;
    idDocumento?: number;
    idUsuario?: number;
    fecha?: Date;
    estado?: string;
};

type UpdateExpedienteData = Optional<ExpedienteAttributes, 'idExpediente'>;

const updateExpediente = async (idExpediente: number, data: UpdateExpedienteData) => {
  try {
    const [affectedRows] = await updateQuery(Expediente)(data, { idExpediente });

    if (affectedRows === 0) {
      return null;
    }

    const ExpedienteActualizada = await Expediente.findOne({ where: { idExpediente } });

    return ExpedienteActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar el Expediente');
  }
};

export { updateExpediente };


