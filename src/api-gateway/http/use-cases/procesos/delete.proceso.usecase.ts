type ProcesoAttributes = {
    idProceso: number;
  };
  
  type DeleteProcesoData = Partial<ProcesoAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Proceso } from 'models/types/Procesos';
  
  const deleteProceso = async (where: DeleteProcesoData) => {
    return await deleteQuery(Proceso)(where);
  };
  
  export { deleteProceso };