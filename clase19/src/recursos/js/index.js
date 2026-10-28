// import productos from "./productos.js" // -> no nombrada
import {productosMascotas, categorias} from './productos.js' //-> nombrada
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'


const productosEnCarro = []

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')
const productosSeleccionados = document.getElementById('productos-seleccionados')
// Filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)




//eventos
botonEvento.addEventListener('click', (evento)=> {
    //dialogo.show()
    dialogo.showModal()
})

 const botonesProducto = contenedorProductos.querySelectorAll('.boton-agregar-producto')

 //console.log(botonesProducto)

botonesProducto.forEach((boton)=>{
    boton.addEventListener('click', (evento)=> {
        const idProducto = parseInt(boton.dataset.id)
        //console.log(idProducto)
        productosEnCarro.push(idProducto)
        console.log(productosEnCarro)
        productosSeleccionados.textContent= productosEnCarro.length
    })
})