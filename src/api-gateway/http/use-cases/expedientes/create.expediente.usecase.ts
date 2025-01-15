import { findOneQuery, createQuery } from 'models/queries';
import { Expediente } from 'models/types/Expedientes';
import { CreationAttributes } from 'sequelize';

type CreateExpedienteData = CreationAttributes<Expediente>;

const createExpediente = async (data: CreateExpedienteData) => {
    const existingExpediente = await findOneQuery(Expediente)({
    idDocumento: data.idDocumento,
    idUsuario: data.idUsuario,
    estado: data.estado,
});
  if (existingExpediente) {
    throw new Error('El Expediente ya existe con esta combinacion');
  }

  return await createQuery(Expediente)(data);
};

export { createExpediente };
