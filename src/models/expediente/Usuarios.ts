import { Model, DataTypes, Sequelize } from "sequelize";

const USUARIO_TABLE = 'Usuarios';

const UsuariosSchema = {
  idUsuario: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  curp: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primerApellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  segundoApellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Usuario extends Model {

  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: USUARIO_TABLE,
    modelName: 'Usuarios',
    timestamps: false,
  };
  }

}

export { USUARIO_TABLE, UsuariosSchema, Usuario };