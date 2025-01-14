type ControlAttributes = {
    idControl: number;
  };
  
  type DeleteControlData = Partial<ControlAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Control } from 'models/types/Control';
  
  const deleteControl = async (where: DeleteControlData) => {
    return await deleteQuery(Control)(where);
  };
  
  export { deleteControl };