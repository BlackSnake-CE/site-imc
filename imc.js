function calcular(){
    let peso, altura
    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)


    let imc = peso / (altura * altura);

    let resultado = ""


    if (imc < 18.5) {
    resultado = "abaixo do peso normal"
    } else if (imc >= 18.5 && imc < 25) {
        resultado = "peso normal"
    } else if (imc >= 25 && imc < 30) {
        resultado = "excesso de peso"
    } else if (imc >= 30 && imc < 35) {
        resultado = "obesidade de classe I"
    } else if (imc >= 35 && imc < 40) {
        resultado = "Obesidade classe II."
    } else {
        resultado = "Obesidade classe III."
    }
    document.getElementById("recebe").textContent = `O IMC é ${imc.toFixed(2)}. Você está ${resultado}`;
    document.getElementById("calcular").addEventListener("click", calcular)


}





