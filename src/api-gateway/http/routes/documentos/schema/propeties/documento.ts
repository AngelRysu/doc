const documento = {
    clave: { type: 'string'},
    nombre: { type: 'string'},
    tipo: { 
      type: 'string', 
      enum: ['pdf', 'doc', 'jpg'], 
    },
  };
  
  export { documento };