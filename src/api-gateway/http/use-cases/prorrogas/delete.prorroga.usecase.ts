type ProrrogaAttributes = {
    idProrroga: number;
  };
  
  type DeleteProrrogaData = Partial<ProrrogaAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Prorroga } from 'models/types/Prorrogas';
  
  const deleteProrroga = async (where: DeleteProrrogaData) => {
    return await deleteQuery(Prorroga)(where);
  };
  
  export { deleteProrroga };