import { updateQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';
import { Optional } from 'sequelize';

// Definir los atributos de Usuario
interface UsuarioAttributes {
  idUsuario: number;
  curp: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
}

type UpdateUsuarioData = Optional<UsuarioAttributes, 'idUsuario'>;

const updateUsuario = async (idUsuario: number, data: UpdateUsuarioData) => {
  return await updateQuery(Usuario)(idUsuario, data);
};

export default updateUsuario;
