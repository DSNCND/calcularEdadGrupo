/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
*/

let resetearIntegrantes =
function ()
{
    let elementos = document.querySelectorAll(".reset")
    elementos.forEach
    (
        e=>
        {
            e.remove()
        }
    );
}


let agregarIntegrantes =
    function (cantidad) {
        let form = document.querySelector("#form");
        for (let c = 0; c < cantidad; c++) {
            let label = document.createElement("label")
            label.classList.add("reset")
            label.innerText=" ingrese la edad"
            let input = document.createElement("input")
            input.classList.add("reset")
            let br = document.querySelector("br")
            form.append(br,input,label)
        }
    }


//definir cantidad de integrantes
let integrantes = document.querySelector("#cantidad");

integrantes.onkeyup=function()
{
    let cantidad = integrantes.value;
    agregarIntegrantes(cantidad);
}
integrantes.onkeydown=function()
{
    resetearIntegrantes() 
}

///////////////////////////////////////
/* calculos */
///////////////////////////////////////

function obtenerMayorNumero(array)
{
    let mayor = array[0];

    for(let n=1;n<array.length;n++)
    {
        if(mayor<array[n])
        {
            mayor=array[n];
        }
    }

    return mayor;
}

function obtenerMenorNumero(array)
{
    let menor = array[0];

    for (let n = 1; n<array.length; n++) {
        if (menor > array[n]) 
        {
            menor = array[n];
        }
    }
    return menor;
}

function obtenerPromedio(array)
{
    total=array[0]
    for(let n =1;n<array.length;n++)
    {
        total+=array[n];
    }
    return (total/array.length).toFixed(2)
}


/*
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/