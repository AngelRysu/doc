import { findAllQuery } from 'models/queries';
import { Control } from 'models/types/Control';

type FindAllControlsData = Partial<Control>;

const findAllControls = async (where?: FindAllControlsData) => {
  return await findAllQuery(Control)(where);
};

export { findAllControls };