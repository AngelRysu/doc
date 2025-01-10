import { findOneQuery, createQuery } from 'models/queries';
import { Etiqueta } from 'models/types/Etiquetas';
import { CreationAttributes } from 'sequelize';

type CreateEtiquetaData = CreationAttributes<Etiqueta>;

const createEtiqueta = async (data: CreateEtiquetaData) => {
  const existingEtiqueta = await findOneQuery(Etiqueta)({ nombre: data.nombre });
  if (existingEtiqueta) {
    throw new Error('la Etiqueta con ese nombre ya existe');
  }
  return await createQuery(Etiqueta)(data);
};

export { createEtiqueta };
