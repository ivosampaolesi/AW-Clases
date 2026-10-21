const personas = [
{
    nombre: "Andres",
    edad: 20
},
{
    nombre: "José",
    edad: 21
},
{
    nombre: "Camila",
    edad: 25
},
]

/*personas.forEach((elementoDelArreglo, indice, arreglo)=>{
    console.log(elementoDelArreglo.edad, indice, arreglo)
})*/

//map
/*const nuevoArregloPersonas = personas.map((elementoDelArreglo, indice, arreglo)=>{
    return elementoDelArreglo
})
console. log(nuevoArregloPersonas)*/

//filter
/*const nuevoArregloPersonas = personas.filter((persona, indice, arreglo)=>{
    return persona.edad > 20
})
console. log(nuevoArregloPersonas)*/

//find
const nuevoArregloPersonas = personas.find((persona, indice, arreglo)=>{
    return persona.edad > 20
})
console. log(nuevoArregloPersonas)