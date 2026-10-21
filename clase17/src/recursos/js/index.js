const contenedorProductos = document.getElementById("contenedor-productos")

//console.log(contenedorProductos)

/*contenedorProductos.innerHTML = `
    <article>
        <h3>Correa de cuero</h3>
        <picture>
            <img src="./recursos/imagenes/productos/correa-perro.jpg" alt="Correa de cuero para perro">
            <!-- <source media="(min-width: )" srcset="" sizes=""> -->
        </picture>
        <p>
            Correa de cuero extensible
        </p>
        <ul>
            <li>
                Telles S M L
            </li>
            <li>
                Precio $ 10000
            </li>
        </ul>
        <button>Añadir al carro</button>
    </article>
`*/

const productosMascotas = [
    {
        nombre: "Collar Ajustable de Nylon",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Resistente collar de nylon con broche de seguridad para perros.",
        talles: ["S", "M", "L"],
        precio: 12.50
    },
    {
        nombre: "Arnés Reflectivo Ergonómico",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Arnés cómodo con tiras reflectivas para paseos nocturnos seguros.",
        talles: ["S", "M", "L"],
        precio: 24.99
    },
    {
        nombre: "Cama Suave Térmica",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Cama acojinada lavable para el máximo descanso de tu mascota.",
        talles: ["S", "M", "L"],
        precio: 45.00
    },
    {
        nombre: "Capota Impermeable para Lluvia",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Chaqueta impermeable ligera que protege a tu perro del agua.",
        talles: ["S", "M", "L"],
        precio: 18.75
    },
    {
        nombre: "Chaleco de Lana Tejido",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Abrigo de lana suave y cálido ideal para días fríos.",
        talles: ["S", "M", "L"],
        precio: 15.30
    },
    {
        nombre: "Bozal de Malla Transpirable",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Bozal de diseño ajustado que permite respirar y beber libremente.",
        talles: ["S", "M", "L"],
        precio: 10.99
    },
    {
        nombre: "Camiseta de Algodón Fresca",
        imagen: "https://ejemplo.com/imagenes/camiseta-algodon.jpg",
        descripcion: "Ropa ligera de algodón con diseños divertidos para uso diario.",
        talles: ["S", "M", "L"],
        precio: 11.20
    },
    {
        nombre: "Zapatos Antideslizantes de Neopreno",
        imagen: "https://ejemplo.com/imagenes/zapatos-neopreno.jpg",
        descripcion: "Botas protectoras para patas contra el calor y pisos resbaladizos.",
        talles: ["S", "M", "L"],
        precio: 22.00
    },
    {
        nombre: "Disfraz Temático de Temporada",
        imagen: "https://ejemplo.com/imagenes/disfraz-tematico.jpg",
        descripcion: "Disfraz cómodo y divertido perfecto para fiestas y fotos especiales.",
        talles: ["S", "M", "L"],
        precio: 29.90
    },
    {
        nombre: "Pañuelo Bandana de Tela",
        imagen: "https://ejemplo.com/imagenes/panuelo-bandana.jpg",
        descripcion: "Accesorio elegante y lavable que se ajusta fácilmente al cuello.",
        talles: ["S", "M", "L"],
        precio: 8.50
    }
];

let productosHTML= ''

productosMascotas.forEach((producto))=>{
    productosHTML += `
    <article>
        <h3>Correa de cuero</h3>
        <picture>
            <img src="./recursos/imagenes/productos/correa-perro.jpg" alt="Correa de cuero para perro">
            <!-- <source media="(min-width: )" srcset="" sizes=""> -->
        </picture>
        <p>
            Correa de cuero extensible
        </p>
        <ul>
            <li>
                Telles S M L
            </li>
            <li>
                Precio $ 10000
            </li>
        </ul>
        <button>Añadir al carro</button>
    </article>
    `
}

contenedorProductos.innerHTML = productosHTML