const btnSoma = document.querySelector('#soma')

btnSoma.addEventListener('click', soma)

function pedirNumeros() {
const numero = parseInt(prompt('informe o numero'))
return numero
}


function soma() {

    let soma = pedirNumeros() + pedirNumeros()

    alert('A soma é:' + soma)
}

// function subtracao() {

//     let subtracao = numero1 - numero2

//     alert('A subtracao é: ' + subtracao)
// }

// function multiplicacao() {

//     let multiplicacao = numero1 * numero2

//     alert('A multiplicacao é:' + multiplicacao)
// }

// function divisao() {

//     let divisao = numero1 / numero2

//     alert('A divisao é: ' + divisao)
// }

