type EtiquetaAttributes = {
    idEtiqueta: number;
  };
  
  type DeleteEtiquetaData = Partial<EtiquetaAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Etiqueta } from 'models/types/Etiquetas';
  
  const deleteEtiqueta = async (where: DeleteEtiquetaData) => {
    return await deleteQuery(Etiqueta)(where);
  };
  
  export { deleteEtiqueta };