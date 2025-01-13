import { Sequelize } from 'sequelize';

// Modelos internos
import { Categoria, CategoriasSchema } from './Categorias';
import { Control, ControlSchema } from './Control';
import { Documento, DocumentosSchema } from './Documentos';
import { Etiqueta, EtiquetasSchema } from './Etiquetas';
import { Expediente, ExpedientesSchema } from './Expedientes';
import { Proceso, ProcesosSchema } from './Procesos';
import { Prorroga, ProrrogasSchema } from './Prorrogas';
import { Usuario, UsuariosSchema } from './Usuarios';

export function setupModels(sequelize: Sequelize): void {
    // Inicialización de modelos con sus esquemas
    Categoria.init(CategoriasSchema, Categoria.config(sequelize));
    Control.init(ControlSchema, Control.config(sequelize));
    Documento.init(DocumentosSchema, Documento.config(sequelize));
    Etiqueta.init(EtiquetasSchema, Etiqueta.config(sequelize));
    Expediente.init(ExpedientesSchema, Expediente.config(sequelize));
    Proceso.init(ProcesosSchema, Proceso.config(sequelize));
    Prorroga.init(ProrrogasSchema, Prorroga.config(sequelize));
    Usuario.init(UsuariosSchema, Usuario.config(sequelize));

    // Asociación entre modelos
    Categoria.associate(sequelize.models);
    Control.associate(sequelize.models);
    Expediente.associate(sequelize.models);
    Prorroga.associate(sequelize.models);
}
