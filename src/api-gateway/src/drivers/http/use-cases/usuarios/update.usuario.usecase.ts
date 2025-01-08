import { updateQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';
import { Optional } from 'sequelize';

type UsuarioAttributes = {
    idUsuario: number;
    curp: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
};

type UpdateUsuarioData = Optional<UsuarioAttributes, 'idUsuario'>;

const updateUsuario = async (idUsuario: number, data: UpdateUsuarioData) => {
  try {
    const [affectedRows] = await updateQuery(Usuario)(data, { idUsuario });

    if (affectedRows === 0) {
      return null;
    }

    const usuarioActualizada = await Usuario.findOne({ where: { idUsuario } });

    return usuarioActualizada;
  } catch (error) {
    console.error('Error en updateCategoria:', error);
    throw new Error('Error al actualizar el usuario');
  }
};

export { updateUsuario };


