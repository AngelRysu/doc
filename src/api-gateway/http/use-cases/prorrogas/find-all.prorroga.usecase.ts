import { findAllQuery } from 'models/queries';
import { Prorroga } from 'models/types/Prorrogas';

type FindAllProrrogasData = Partial<Prorroga>;

const findAllProrrogas = async (where?: FindAllProrrogasData) => {
  return await findAllQuery(Prorroga)(where);
};

export { findAllProrrogas };