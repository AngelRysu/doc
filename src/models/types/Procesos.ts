import { Model, DataTypes, Sequelize } from "sequelize";

const PROCESO_TABLE = 'Prosesos';

const ProcesosSchema = {
  idProceso: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Proceso extends Model {

  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: PROCESO_TABLE,
    modelName: 'Procesos',
    timestamps: false,
  };
  }
}

export { PROCESO_TABLE, ProcesosSchema, Proceso };
