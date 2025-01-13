import { createQuery } from 'models/queries';
import { Documento } from 'models/types/Documentos';
import { CreationAttributes } from 'sequelize';

type CreateDocumentoData = CreationAttributes<Documento>;

const createDocumento = async (data: CreateDocumentoData) => {
  

  return await createQuery(Documento)(data);
};

export { createDocumento };
