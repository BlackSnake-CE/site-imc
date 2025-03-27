function calcular2() {
    let peso, altura;
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);
    let resultado = "";

    if (imc < 19.1) {
        resultado = "abaixo do peso";
    } else if (imc >= 19.1 && imc < 25.8) {
        resultado = "peso normal";
    } else if (imc >= 25.8 && imc < 27.3) {
        resultado = "pouco acima do peso";
    } else if (imc >= 27.3 && imc < 32.3) {
        resultado = "acima do peso";
    } else {
        resultado = "obesidade";
    }

    document.getElementById("recebe").textContent = `O IMC é ${imc.toFixed(2)}. Você está ${resultado}`;
}

document.getElementById("calcular").addEventListener("click", calcular2);
