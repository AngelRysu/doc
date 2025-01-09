type DocumentoAttributes = {
    idDocumento: number;
    clave: string;
    nombre: string;
    tipo: string;
};
  
  type FindOneDocumentoData = Partial<DocumentoAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Documento } from 'models/expediente/Documentos';
  
  const findOneDocumento = async (where: FindOneDocumentoData) => {
    return await findOneQuery(Documento)(where);
  };
  
  export { findOneDocumento };
  