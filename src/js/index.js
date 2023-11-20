/* 
Objetivo 1 - quando passar o mouse em cima do personagem temos que:

- colocar a classe 'selecionado' no personagem que o mouse estiver em cima, para adicionar a animação 

- quando o mouse sair de cima retirar a classe 'selecionado' 

Objetivo 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

// Obj 1 
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {

    //selecionando o personagem com o mouse
    personagem.addEventListener('mouseenter', () =>{
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

        //Alterando a imagem do personagem grande
        const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        //Alterando o nome do personagem do jogador 1
        const nomeJogador1 = document.getElementById('nome-jogador-1');//busca o ID do nome
        const nomeSelecionado = personagem.getAttribute('data-name');//busca o nome
        nomeJogador1.innerHTML = nomeSelecionado; //mudando nome
    })
})

