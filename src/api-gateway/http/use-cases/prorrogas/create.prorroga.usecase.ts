import { findOneQuery, createQuery } from 'models/queries';
import { Prorroga } from 'models/types/Prorrogas';
import { CreationAttributes } from 'sequelize';

type CreateProrrogaData = CreationAttributes<Prorroga>;

const createProrroga = async (data: CreateProrrogaData) => {
    const existingProrroga = await findOneQuery(Prorroga)({
    idUsuario: data.idUsuario,
    idDocumento: data.idDocumento,
    estado: data.estado,
});
  if (existingProrroga) {
    throw new Error('El Prorroga ya existe con esta combinacion');
  }

  return await createQuery(Prorroga)(data);
};

export { createProrroga };
