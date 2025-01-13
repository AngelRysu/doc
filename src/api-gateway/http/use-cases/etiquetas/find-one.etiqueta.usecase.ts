type EtiquetaAttributes = {
    idEtiqueta: number;
    nombre: string;
};
  
  type FindOneEtiquetaData = Partial<EtiquetaAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Etiqueta } from 'models/types/Etiquetas';
  
  const findOneEtiqueta = async (where: FindOneEtiquetaData) => {
    return await findOneQuery(Etiqueta)(where);
  };
  
  export { findOneEtiqueta };
  