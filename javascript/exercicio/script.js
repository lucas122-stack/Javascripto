const listaLis = [...document.querySelectorAll('li')]
const butao = document.querySelector('#transferir')
const listaEsquerda = document.getElementById('lista-esquerda')
const listaDireita = document.getElementById('lista-direita')


listaLis.forEach((li) => {
    li.addEventListener('click', () => {
        li.classList.toggle('selecionado')
    })
})

butao.addEventListener('click', () => {
    const selecionadosEsquerda = [...listaEsquerda.querySelectorAll('.selecionado')]
    const selecionadosDireita = [...listaDireita.querySelectorAll('.selecionado')]

    selecionadosEsquerda.forEach((itemSelecionado)=>{
        itemSelecionado.classList.remove('selecionado')
        listaDireita.appendChild(itemSelecionado)

    })
    selecionadosDireita.forEach((itemSelecionado)=>{
        itemSelecionado.classList.remove('selecionado')
        listaEsquerda.appendChild(itemSelecionado)

    })
})

































// for (let i = 0; i < listaLis.length; i++) {
//     listaLis[i].addEventListener('click', ()={
//         listaLis[i].classList.toggle('selecionado')
//     })
// }


// const frutas = ['banana', 'maça', 'goiaba', 'uva']

// console.log(frutas[2].toUpperCase())

// frutas.forEach((fruta)=>{
//     console.log(fruta.toUpperCase())
// })

