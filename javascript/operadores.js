//operador ternario
function cualquiera(cualquiuerValor){
    return(cualquiuerValor>0)?10:20
}
//console.log(cualquiera(30));
//operador opcional
let persona={
    nombre:"asd",
    apellido:"alarcon",
    hijos:{}
}

//console.log(persona?.hijos?.numeroHijos);

//?? Operador nullish
//retorna "Valor por defecto" si la propiedad esta nula o undefined
console.log(persona.hijos ?? "Valor por defecto");

//=== y ==
// valida valor y tipo
//==valida unicamnete el valor

console.log(5=='5');
console.log(5==='5');