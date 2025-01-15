type ExpedienteAttributes = {
    idExpediente: number;
  };
  
  type DeleteExpedienteData = Partial<ExpedienteAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Expediente } from 'models/types/Expedientes';
  
  const deleteExpediente = async (where: DeleteExpedienteData) => {
    return await deleteQuery(Expediente)(where);
  };
  
  export { deleteExpediente };