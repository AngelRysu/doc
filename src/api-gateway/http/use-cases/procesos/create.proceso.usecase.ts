import { createQuery } from 'models/queries';
import { Proceso } from 'models/types/Procesos';
import { CreationAttributes } from 'sequelize';

type CreateProcesoData = CreationAttributes<Proceso>;

const createProceso = async (data: CreateProcesoData) => {
  
  return await createQuery(Proceso)(data);
};

export { createProceso };
