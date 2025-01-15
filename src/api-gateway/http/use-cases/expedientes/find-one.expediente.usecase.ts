type ExpedienteAttributes = {
    idExpediente: number;
    idDocumento: number;
    idUsuario: number;
    fecha: string;
    estado: string;
};
  
  type FindOneExpedienteData = Partial<ExpedienteAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Expediente } from 'models/types/Expedientes';
  
  const findOneExpediente = async (where: FindOneExpedienteData) => {
    return await findOneQuery(Expediente)(where);
  };
  
  export { findOneExpediente };
  