import { Model, DataTypes, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './Usuarios';
import { ETIQUETA_TABLE } from './Etiquetas';

const CATEGORIA_TABLE = 'Categorias';

const CategoriasSchema = {
  idCategoria: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  idEtiqueta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idEtiqueta',
    references: {
      model: ETIQUETA_TABLE,
      key: 'idEtiqueta',
    },
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    field: 'idUsuario',
    allowNull: false,
    references: {
      model: USUARIO_TABLE,
      key: 'idUsuario',
    },
  },
};

class Categoria extends Model {
  static associate(models: any) {
    this.belongsTo(models.Etiquetas, { foreignKey: 'idEtiqueta', as: 'Etiqueta' });
    this.belongsTo(models.Usuarios, { foreignKey: 'idUsuario', as: 'Usuario' });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CATEGORIA_TABLE,
      modelName: 'Categorias',
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['idUsuario', 'idEtiqueta'],
        },
      ],
    };
  }
}

export { CATEGORIA_TABLE, CategoriasSchema, Categoria };
