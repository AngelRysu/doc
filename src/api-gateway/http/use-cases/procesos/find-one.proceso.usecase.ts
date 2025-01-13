type ProcesoAttributes = {
    idProceso: number;
    clave: string;
    nombre: string;
};
  
  type FindOneProcesoData = Partial<ProcesoAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Proceso } from 'models/types/Procesos';
  
  const findOneProceso = async (where: FindOneProcesoData) => {
    return await findOneQuery(Proceso)(where);
  };
  
  export { findOneProceso };
  