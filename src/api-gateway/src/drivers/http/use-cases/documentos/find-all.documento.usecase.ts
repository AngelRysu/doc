import { findAllQuery } from 'models/queries';
import { Documento } from 'models/expediente/Documentos';

type FindAllDocumentosData = Partial<Documento>;

const findAllDocumentos = async (where?: FindAllDocumentosData) => {
  return await findAllQuery(Documento)(where);
};

export { findAllDocumentos };