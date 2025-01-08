import { Model, ModelStatic, Includeable } from 'sequelize';

export const createQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (data: T['_attributes'], include?: Includeable): Promise<T> => {
    const newEntry = await model.create(data, { include });
    return newEntry;
  };