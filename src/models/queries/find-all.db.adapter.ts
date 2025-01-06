import { Model, ModelStatic, WhereOptions } from 'sequelize';

export const findAllQuery =
  <T extends Model>(model: ModelStatic<T>) =>
  async (where?: WhereOptions<T['_attributes']>): Promise<T[]> => {
    return await model.findAll({ where });
  };
