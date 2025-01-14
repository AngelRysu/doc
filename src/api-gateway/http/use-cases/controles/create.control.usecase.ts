import { findOneQuery, createQuery } from 'models/queries';
import { Control } from 'models/types/Control';
import { CreationAttributes } from 'sequelize';

type CreateControlData = CreationAttributes<Control>;

const createControl = async (data: CreateControlData) => {
    const existingControl = await findOneQuery(Control)({
    idProceso: data.idProceso,
    idDocumento: data.idDocumento,
    digital: data.digital,
});
  if (existingControl) {
    throw new Error('El control ya existe con esta combinacion');
  }

  return await createQuery(Control)(data);
};

export { createControl };
