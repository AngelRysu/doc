import { findOneQuery, createQuery } from 'models/queries';
import { Documento } from 'models/types/Documentos';
import { CreationAttributes } from 'sequelize';

type CreateDocumentoData = CreationAttributes<Documento>;

const createDocumento = async (data: CreateDocumentoData) => {
  const existingDocumento = await findOneQuery(Documento)({});

  if (existingDocumento) {
    throw new Error('El documento ya existe');
  }

  return await createQuery(Documento)(data);
};

export { createDocumento };
