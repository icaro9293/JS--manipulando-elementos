const todos = [...window.document.querySelectorAll('.normal')]
const caixa2 = window.document.querySelector('#box2')
const caixa1 = window.document.querySelector('#box1')
const botao1 = window.document.querySelector('#btn1')
const botao2 = window.document.querySelector('#btn2')


todos.map((el, i) => {
    el.addEventListener('click', (tg) => {
        const alvo = tg.target
        alvo.classList.toggle('selecionado')
        alvo.classList.toggle('normal')
        console.log(alvo)
    })
})


botao1.addEventListener('click', () => {
    let clicado = [...window.document.querySelectorAll('.selecionado')]
    clicado.map((v) => {
        caixa2.appendChild(v)
        v.classList.add('box2')
    })
})

botao2.addEventListener('click', () => {
    let padrao = [...window.document.querySelectorAll('.box2.normal')]
    console.log(padrao)
    padrao.map((v, i) => {
        caixa1.appendChild(v)
    })
})

// solução com apenas 1 botão e lógica de selecionado/não selecionado.
// botaoTransferir.addEventListener('click', () => {
//     const clicado = [...window.document.querySelectorAll('.resultado')]
//     const naoClicado = [...window.document.querySelectorAll('.comum:not(.resultado)')]
//     clicado.map((v, i) => {
//         v.appendChild(caixa2)
//     })

//     naoClicado.map((v, i) => {
//         v.appendChild(caixa1)
//     })
// })






