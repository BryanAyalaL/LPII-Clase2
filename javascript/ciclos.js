//for
for(let i=0; i<10; i++){
    console.log(i);
}
let variable=0;
console.log(variable++);//0
console.log(++variable);//2

//while
variable=0;
while(variable<=2){
    variable++;
    console.log("estoy en el while");
}
//for in
let persona ={
    Nombre:"Bryan",
    id:1234,
    apellido:"alarcon"
}
for(key in persona){
    console.log(key+"->"+persona[key]);
}