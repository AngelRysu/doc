import { updateQuery } from 'models/queries';
import { Documento } from 'models/types/Documentos';
import { Optional } from 'sequelize';

type DocumentoAttributes = {
    idDocumento: number;
    clave?: string;
    nombre?: string;
    tipo?: string;
};

type UpdateDocumentoData = Optional<DocumentoAttributes, 'idDocumento'>;

const updateDocumento = async (idDocumento: number, data: UpdateDocumentoData) => {
  try {
    const [affectedRows] = await updateQuery(Documento)(data, { idDocumento });

    if (affectedRows === 0) {
      return null;
    }

    const documentoActualizada = await Documento.findOne({ where: { idDocumento } });

    return documentoActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar el Documento');
  }
};

export { updateDocumento };


