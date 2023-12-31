//Destructuring
function crearServicio({titulo,descripcion}){
    return `
        <div class="servicio">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}
function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
            <h2>Bienvenido</h2>
            <button id="boton-cerrar">Cerrar</button>
            </div>
        </div>
    `
}
const data=[
    {titulo: "Seccion uno",descripcion:"Descripcion de la uno"},
    {titulo: "zeccion dos",descripcion:"Descripcion de la dos"},
    {titulo: "Seccion tres",descripcion:"Descripcion de la tres"},
    {titulo: "Seccion cuatro",descripcion:"Descripcion de la cuatro"},
    {titulo: "Seccion cinco",descripcion:"Descripcion de la cinco"},
    {titulo: "Seccion seis",descripcion:"Descripcion de la seis"},
    {titulo: "Seccion 7",descripcion:"Descripcion de la 7"}
];
function crearServicioConObjetos({titulo,descripcion}){
    const contenedorServicio=document.createElement('div');
    const parrafo=document.createElement('p');
    parrafo.innerText=descripcion;
    const heading=document.createElement('h3');
    heading.innerText=titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio");
    return contenedorServicio;
}
const contenedor=document.querySelector('.contenedor-servicios')
console.log(contenedor)


for (servicio of data){
    const{descripcion}=servicio;
    console.log(descripcion);
    const servicioHtml=crearServicioConObjetos(servicio);
    contenedor.appendChild(servicioHtml);
    //contenedor.insertAdjacentHTML('beforeend', servicioHtml)
}

document.body.insertAdjacentHTML('beforeend', crearModal())
const botonCerrar=document.getElementById("boton-cerrar");
const modal=document.querySelector(".contenedor-modal")
botonCerrar.addEventListener('click', ()=>modal.remove())