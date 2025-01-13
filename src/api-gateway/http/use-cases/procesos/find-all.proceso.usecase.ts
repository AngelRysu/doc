import { findAllQuery } from 'models/queries';
import { Proceso } from 'models/types/Procesos';

type FindAllProcesosData = Partial<Proceso>;

const findAllProcesos = async (where?: FindAllProcesosData) => {
  return await findAllQuery(Proceso)(where);
};

export { findAllProcesos };