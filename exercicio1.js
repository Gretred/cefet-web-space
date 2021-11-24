// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let botaoCalcularEl = document.querySelector('#calcular');

botaoCalcularEl.addEventListener('click' , function calcular(){
    let GravEl = document.querySelector('#constante');
    let M1El = document.querySelector('#massa1');
    let M2El = document.querySelector('#massa2');
    let DistEL = document.querySelector('#distancia');
    let ResEl = document.querySelector('#resultado');
    let grav = GravEl.value;
    let M1 = M1El.value;
    let M2 = M2El.value;
    let Dist = DistEL.value;
    let Resultado = (grav*M1*M2)/(Dist**2);
    ResEl.value = Resultado;
});