/*
const estudante = {
    nome: 'Bendi',
    sobrenome: 'Souza',
    numeroMatricula:37101233,
    notasSemestre:[7, 10, 8, 9]
}

estudante.modulo = 3


console.log(estudante.nome)
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)

const copiaEstudante = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4, 
    notasSemestre: [...estudante.notasSemestre, 9]
}

//copiaEstudante.nome = 'Astrodev'
//copiaEstudante.notasSemestre.push(9)
//copiaEstudante.modulo = 4

console.log(estudante, copiaEstudante)

const estudantesLabenu = []

estudantesLabenu.push(estudante, copiaEstudante)

console.log(estudantesLabenu)
*/

const carrinho = {
    nome:'Bendi',
    formaPagamento:'cartao',
    endereco:'betim-mg'  

};

carrinho.compras = [ 

    {nomeProduto:'carne', precoProd:49.8, quant:2},
    {nomeProduto:'carvao', precoProd:19.8, quant:1},
    {nomeProduto:'suco', precoProd:7.8, quant:2}
]

// console.log(carrinho)

const quantProdutos = carrinho.compras.length
    // console.log(quantProdutos)


    const carinhoPresente = {
        ...carrinho,
        nome:'Noemi' ,
        formaPagamento: 'Cartão Presente' ,
    }

    // console.log(carrinho, carinhoPresente)

const unidTerceiroProd = carrinho.compras[2].quant //para acessar dentro de um item específico alguma de suas opções

    console.log(unidTerceiroProd)




