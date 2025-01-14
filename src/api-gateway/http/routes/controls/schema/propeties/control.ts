export const control ={
    idProceso: {type: "integer"}, 
    idDocumento: {type: "integer"}, 
    obligatorio: {type: "string", enum: ["S", "N"]},
    digital: {type: "string", enum: ["S", "N"]},
}