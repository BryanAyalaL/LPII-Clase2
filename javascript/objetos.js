let persona ={
    Nombre:"Bryan",
    id:1234,
    apellido:"alarcon",
    esProfesor:true,
    estudiantes:[
        {
            id:1,
            Nombre: "Fabian"
        },
        {
            id:2,
            nombre:"Júan jose"
        }
    ]
}
/*console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
console.log(persona.apellido);
let personaAsString = JSON.stringify(persona);
console.log(personaAsString);
console.log(JSON.parse(personaAsString));*/

//fuction constructor
function Persona(nombre,apellido,esProfesor){
    this.nombre=nombre;
    this.apellido=apellido;
    this.esProfesor=esProfesor;
}
let personaDos=new Persona("sebastian","alarcon",true);
personaDos.id=1234//agregar atributo
delete personaDos.id;//eliminar atributo
console.log(personaDos)
