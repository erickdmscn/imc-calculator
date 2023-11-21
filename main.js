function calcularIMC() {
    var heightElement = document.getElementById('altura');
    var weightElement = document.getElementById('peso');
    var resultado = document.getElementById('resultado');
    var height = Number(heightElement.value);
    var weight = Number(weightElement.value);
    var imc = weight / (height * height);

    if (imc <= 18.5) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, você está classificado como: baixo peso`;
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, você está classificado como: peso normal`;
    }
    else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, você está classificado como: acima do peso`;
    }
    else {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, você está classificado como: obeso`;
    }
}