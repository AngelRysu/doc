import { Model, ModelStatic, WhereOptions } from 'sequelize';

export const findOneQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (where: WhereOptions<T['_attributes']>): Promise<T | null> => {
    return await model.findOne({ where });
  };