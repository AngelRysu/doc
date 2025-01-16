import { findAllQuery } from 'models/queries';
import { Expediente } from 'models/types/Expedientes';

type FindAllExpedientesData = Partial<Expediente>;

const findAllExpedientes = async (where?: FindAllExpedientesData) => {
  return await findAllQuery(Expediente)(where);
};

export { findAllExpedientes };