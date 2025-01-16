const expediente = {
    idDocumento: {type: "integer"}, 
    idUsuario: {type: "integer"}, 
    fecha: {type: "string", description: "fecha de vencimiento", format: "date"},
    url: {type: "string", description: "direccion de la carpeta"},
    estado: {type: "string", enum: ["Activo", "Inactivo"]},
} 
  export { expediente };