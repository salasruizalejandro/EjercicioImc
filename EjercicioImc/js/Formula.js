

// variables de peso y altura
var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i<pacientes.length; i++){
    
    //variable paciente toma toda la lista de Pacientes
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var tdaltura = paciente.querySelector(".info-altura");
    var tdimc = paciente.querySelector(".info-imc");
    
    
    //Pasa los valores a un contexto para hacer operaciones
    var imc = tdimc.textContent
    var peso = tdpeso.textContent
    var altura = tdaltura.textContent
    var imc = tdimc.textContent 
    
    
    
    //Booleanas true and false para validar si entra o no
    var validarPeso = true
    var validarAltura = true
    //condicionales para verificar peso y altura
    if((peso<=0)||(peso>=300)){
        tdimc.textContent="Peso Incorrecto"
        validarPeso = false
    }
    if( (altura<=0) || (altura>4.00)){
        tdimc.textContent="Altura Incorrecta"
        validarAltura = false
    }
    //Valida si es verdadero el peso y la altura para hacer operacion
    if((validarAltura) && (validarPeso)){
        tdimc.textContent = calcularIMC(peso,altura);        
    }
}

function calcularIMC(peso,altura){
    imc = (altura*altura)/peso;
    return imc.toFixed(2);
}


