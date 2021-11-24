// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let botaoEl = document.querySelectorAll(".botao-expandir-retrair");

for (let i=0; i<botaoEl.length; i++){
    botaoEl[i].addEventListener('click', function expandir(e){
        let botao=e.currentTarget;
        if(botao.innerText === '+'){
            botao.innerText = '-';
        }else{
            botao.innerText = '+';
        }
        botao = e.currentTarget.parentNode;        
        botao.classList.toggle('expandido');        
    });
}