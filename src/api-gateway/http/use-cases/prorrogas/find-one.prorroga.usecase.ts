type ProrrogaAttributes = {
    idProrroga: number;
    idUsuario: number;
    idDocumento: number;
    vencimiento: string;
    estado: string;
};
  
  type FindOneProrrogaData = Partial<ProrrogaAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Prorroga } from 'models/types/Prorrogas';
  
  const findOneProrroga = async (where: FindOneProrrogaData) => {
    return await findOneQuery(Prorroga)(where);
  };
  
  export { findOneProrroga };
  