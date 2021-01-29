/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
*/


///////  agregar/kitar integrantes
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
            let input = document.createElement("input")
            input.type="number";
            input.setAttribute("id", "l" + c)
            input.classList.add("reset")
            input.classList.add("value-edad")
            
            input.addEventListener
            ("keyup", k =>
                {
                    if(k.key.toString() === "Enter") { calcular() }
                }
            )
            

            let label = document.createElement("label")
            label.classList.add("reset")
            label.setAttribute("for","l"+c)
            label.innerHTML=`<b> Ingrese la edad del integrante ${c+1}#</b>`
            let br = document.querySelector("br")
            form.append(br,input,label)
        }

        if(cantidad>0)
        {
            document.querySelector("#calcular").classList.remove("oculto")
        }else
        {
            document.querySelector("#calcular").classList.add("oculto")
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
    let arrayDeValues = document.querySelectorAll(".value-edad");
    if(!arrayDeValues.length>0){
        document.querySelector("#analisis").classList.add("oculto")
    }
}



///////////////////////////////////////
/* calculos */
///////////////////////////////////////


let calcular = 
()=>
{
    let arrayDeValues=[];
    let valores = document.querySelectorAll(".value-edad")
    for (let index = 0; index < valores.length; index++) 
    {
        arrayDeValues.push(valores[index].value)
    }
    
    let mayor=obtenerMayorNumero(arrayDeValues);
    let menor=obtenerMenorNumero(arrayDeValues);
    let promedio=obtenerPromedio(arrayDeValues);

    document.querySelector("#mayor-edad").innerText=mayor;
    document.querySelector("#menor-edad").innerText=menor;
    document.querySelector("#promedio-edad").innerText=promedio;
    if (arrayDeValues.length > 0) {
        document.querySelector("#analisis").classList.remove("oculto")
    }

}


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
    let total=0;
    let vacios=0;
    
    for(let n =0;n<array.length;n++)
    {
        if(array[n]=="")
        {
            vacios++;
        }
        total+=Number(array[n]);
    }
    return (total/(array.length-vacios)).toFixed(2)
}

document.querySelector("#calcular").onclick = calcular;


/*
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/