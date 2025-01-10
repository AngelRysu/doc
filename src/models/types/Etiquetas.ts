import { Model, DataTypes, Sequelize } from "sequelize";

const ETIQUETA_TABLE = 'Etiquetas';

const EtiquetasSchema = {
  idEtiqueta: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Etiqueta extends Model {
  

  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: ETIQUETA_TABLE,
    modelName: 'Etiquetas',
    };
  }
}

export { ETIQUETA_TABLE, EtiquetasSchema, Etiqueta };
