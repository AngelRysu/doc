import { findAllQuery } from 'models/queries';
import { Etiqueta } from 'models/types/Etiquetas';

type FindAllEtiquetasData = Partial<Etiqueta>;

const findAllEtiquetas = async (where?: FindAllEtiquetasData) => {
  return await findAllQuery(Etiqueta)(where);
};

export { findAllEtiquetas };