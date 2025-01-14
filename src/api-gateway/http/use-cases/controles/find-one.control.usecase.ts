type ControlAttributes = {
    idControl: number;
    idProceso: number;
    idDocumento: number;
    obligatorio: string;
    digital: string;
  };
  
  type FindOneControlData = Partial<ControlAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Control } from 'models/types/Control';
  
  const findOneControl = async (where: FindOneControlData) => {
    return await findOneQuery(Control)(where);
  };
  
  export { findOneControl };
  