class Persona {
    #nombre;
    #apellido;
    #age;
    constructor(nombre,apellido){
        this.#nombre=nombre;
        this.#apellido=apellido;
    }
    get nombre(){
        return this.#nombre;
    }
}
//# se usa para colocarla privada eje: $variable="valor de la variable"
let persona=new Persona ("sebastian","alarcon");

console.log(persona.nombre)
