import { Model, DataTypes, Sequelize } from "sequelize";
import { PROCESO_TABLE } from "./Procesos"
import { DOCUMENTO_TABLE } from "./Documentos"

const CONTROL_TABLE = 'Control';

const ControlSchema = {
  idControl: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  idProceso: {
    type: DataTypes.INTEGER,
    field : 'idProceso',
    allowNull: false,
    references: {
      model: PROCESO_TABLE,
      key: 'idProceso',
    },
  },
  idDocumento: {
    type: DataTypes.INTEGER,
    field : 'idDocumento',
    allowNull: false,
    references: {
      model: DOCUMENTO_TABLE, 
      key: 'idDocumento', 
    },
  },
  obligatorio: {
    type: DataTypes.ENUM('S', 'N'),
    allowNull: false,
  },
  digital: {
    type: DataTypes.ENUM('S', 'N'),
    allowNull: false,
  },
};

class Control extends Model {
  static associate(models:any){
      this.belongsTo(models.Procesos, { foreignKey: 'idProceso' ,as: 'Proceso' });
      this.belongsTo(models.Documentos, { foreignKey: 'idDocumento', as: 'Documento' });
  }

  static config(sequelize: Sequelize) {
      return {
      sequelize,
      tableName: CONTROL_TABLE,
      modelName: 'Control',
    };
  }
}

export { CONTROL_TABLE, ControlSchema, Control };