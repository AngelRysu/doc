const prorroga = {
    idUsuario: {type: "integer"}, 
    idDocumento: {type: "integer"}, 
    vencimiento: {type: "string", description: "fecha de vencimiento", format: "date"},
    estado: {type: "string", enum: ["Elaborado", "Autorizado"]},
} 
  export { prorroga };