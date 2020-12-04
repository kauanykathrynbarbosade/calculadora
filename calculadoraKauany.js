var numero1 = 0
var operador
var numero2 = 0


function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / numero2
        case "%": return numero1 % numero2
    }
}

function setarNumeros(numero) {
    var texto = document.getElementById("visor").innerText
    if (!operador) {
        numero1 = texto + numero

    }
    else {
        numero2 = numero2 + "" + numero
    }
    document.getElementById("visor").innerHTML += numero
}

function setarOperadores(operadorzim) {
    if (!operador) {
        operador = operadorzim
    } else {
        setarResultado
        operador = operadorzim

    }
    document.getElementById("visor").innerHTML += operadorzim
}


function setarResultado() {
    var resultado 
    if (operador) {
        resultado = calcular(parseFloat(numero1), operador, parseFloat(numero2))
        
    }
    document.getElementById("visor").innerHTML = resultado
    operador = ""
    numero2 = 0
    numero1 = resultado
}

function limpar() {
    numero1 = 0
    operador = ""
    numero2 = 0
    document.getElementById("visor").innerHTML=""
}
