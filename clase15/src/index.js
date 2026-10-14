//estructura de control de bucle
/*for(let i = 0; i< 10; i++) {
    console.log(i)
}*/

//arreglos 
const numeros = [1, true, 'hola', 4, 5, 7]
//console.log(numeros[i])

//tipos primitivos y no primitivos
//const numeros3 = [1, 2, [2,5], [1,[2]]];
//console. log(numeros3[3][1][0])

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//objetos
const persona = {
    // propiedad -> valor
    nombre: 'Andres',
    edad: 20,
    estudia: true,
    redes: [
        'instagram',
        'tiktok',
        'youtube'],
    otros: {
        mascotas: 2
    }
}

console.log(persona.otros.mascotas)