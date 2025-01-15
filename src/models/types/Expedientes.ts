import { Model, DataTypes, Sequelize } from "sequelize";
import { DOCUMENTO_TABLE } from "./Documentos";
import { USUARIO_TABLE } from "./Usuarios";

const EXPEDIENTE_TABLE = 'Expedientes';

const ExpedientesSchema = {
  idExpediente: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  idDocumento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idDocumento',
    references: {
      model: DOCUMENTO_TABLE,
      key: 'idDocumento',
    },
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idUsuario',
    references: {
      model: USUARIO_TABLE, 
      key: 'idUsuario', 
    },
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    allowNull: false,
  },
};

class Expediente extends Model {
  static associate(models:any){
    this.belongsTo(models.Documentos, { foreignKey: 'idDocumento', as: 'documento' });
    this.belongsTo(models.Usuarios, { foreignKey: 'idUsuario' ,as: 'usuario' });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EXPEDIENTE_TABLE,
      modelName: 'Expediente',
      indexes: [
        {
          unique: true,
          fields: [ 'idDocumento', 'idUsuario', 'estado'],
        },
      ],
    };
  }
}

export { EXPEDIENTE_TABLE, ExpedientesSchema, Expediente };
