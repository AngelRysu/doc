import { Model, DataTypes, Sequelize } from "sequelize";

const DOCUMENTO_TABLE = 'Documentos';

const DocumentosSchema = {
  idDocumento: {
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
  tipo: {
    type: DataTypes.ENUM('pdf', 'doc', 'jpg'),
    allowNull: false,
  },
};

class Documento extends Model {
  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: DOCUMENTO_TABLE,
    modelName: 'Documentos',
    timestamps: false,
    };
  }
}

export { DOCUMENTO_TABLE, DocumentosSchema, Documento };
