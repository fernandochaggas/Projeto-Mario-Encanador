/* 
    -> Variáveis = são espaços de memória que reservamos para guardar códigos.

    3 jeitos para criar uma variavel
        - var / jeito antigo - NÃO É MUITO USADO
        - let => é uma varável que podemos alterar depois
        - const => é uma constante que não se altera




    -> Funções = é um trecho de código que só é executado quando chamado

    Para criar uma Function

    function soma(){
    }

    para chamar nossa função colocamos apenas o nome da nossa função
    soma()

    JavaScript

    Manipular a DOM

*/
const form = document.querySelector(".formulario-contato")
const mascara = document.querySelector(".mascara-formulario")




function mostrarForm() {
   form.style.left = "50%"
   form.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

