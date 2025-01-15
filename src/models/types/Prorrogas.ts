import { Model, DataTypes, Sequelize } from "sequelize";
import { USUARIO_TABLE } from "./Usuarios"
import { DOCUMENTO_TABLE } from "./Documentos"

const PRORROGA_TABLE = 'Prorrogas';

const ProrrogasSchema = {
  idProrroga: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
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
  idDocumento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idDocumento',
    references: {
      model: DOCUMENTO_TABLE,
      key: 'idDocumento',
    },
  },
  vencimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Elaborado', 'Autorizado'),
    allowNull: false,
  },
};

class Prorroga extends Model {
  
  static associate(models:any){
    this.belongsTo(models.Usuarios, { foreignKey: 'idUsuario' ,as: 'usuario' });
    this.belongsTo(models.Documentos, { foreignKey: 'idDocumento', as: 'documento' });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: PRORROGA_TABLE,
      modelName: 'Prorroga',
      indexes: [
        {
          unique: true,
          fields: ['idUsuario', 'idDocumento', 'estado'],
        },
      ],
    };
  }
}

export { PRORROGA_TABLE, ProrrogasSchema, Prorroga };