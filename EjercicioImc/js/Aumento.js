

// Capturar eventos
var btnadicionar = document.querySelector("#adicionar-paciente");

btnadicionar.addEventListener("click",  function(event){

    event.preventDefault();    
    //Capturo Todo el formulario Pacientes
    var form = document.querySelector("#formulario");
    var paciente = capturarDatosPaciente(form); 
    var pacienteTr = construirTr(paciente)
    var tabla = document.querySelector("#tabla-pacientes")

    //Se busca el espacio para introducir el tbody y con appendchild introduce el espacio
    tabla.appendChild(pacienteTr);

})

function capturarDatosPaciente(form){
    //.value recoge valores del imput 
    //Como crear un objeto
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value, 
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }      
    return paciente; 
}

function construirTr(paciente){

    // crear los tds ly un tr
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");

    var tdNombre = document.createElement("td");
    tdNombre.classList.add("info-nombre");

    var tdPeso = document.createElement("td");
    tdPeso.classList.add("info-peso")

    var tdAltura = document.createElement("td");
    tdaltura.classList.add("info-altura")

    var tdGordura = document.createElement("td");
    tdGordura.classList.add("info-gordura")

    var tdImc = document.createElement("td");
    tdImc.classList.add("info-imc")

    //son los espacios donde van los valores ingresados 
    tdNombre.textContent = paciente.nombre; 
    tdPeso.textContent = paciente.peso; 
    tdAltura.textContent = paciente.altura; 
    tdGordura.textContent = paciente.gordura;
    tdImc.textContent = paciente.imc;


    //ingresa los espacios dentro del html 
    pacienteTr.appendChild(tdNombre)
    pacienteTr.appendChild(tdPeso)
    pacienteTr.appendChild(tdAltura)
    pacienteTr.appendChild(tdGordura)
    pacienteTr.appendChild(tdImc)

    return pacienteTr;
}
    