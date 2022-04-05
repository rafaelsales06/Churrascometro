//Pegando os valores dos input
let kids = document.getElementById("kids");
let adult = document.getElementById("adult");
let duracao = document.getElementById("duração");
let resultado = document.getElementById("resultado")


function calcular(){

    //Limpando a div no caso de calculo a partir da segunda vez 
    resultado.innerHTML = ""

    //Pegando o valor sugerido plo usuario 
    let kidsVL = kids.value;
    let adultVL = adult.value;
    let duracaoVL = duracao.value;
  
    //Calculo dos produtos
    let beef = (adultVL * beeffc(duracaoVL)) + 
    ((beeffc(duracaoVL)/2)* kidsVL);
    
    let beer = (adultVL * beerfc(duracaoVL));
    
    let refri = (adultVL * refrifc(duracaoVL))+((kidsVL * refrifc(duracaoVL))/2);


    //Mostrando os valores na tela
    resultado.innerHTML += `Você Vai Precisar de:<br><br>`;

    resultado.innerHTML += `<img src="img/icons/carne.png"> ${beef/1000} Kg de carne<br>`;

    resultado.innerHTML += `<img src="img/icons/cerveja.png"> ${Math.ceil(beer/355)} Latas De Cerveja<br>`;

    resultado.innerHTML += `<img src="img/icons/refrigerantes.png"> ${Math.ceil(refri/2000)} Garrafas De Refrigerante<br>`;

};


//Função para definir a quantidade de acordo com a duração
function beeffc(d){
    if(d < 6)
        return 400
    
    else
        return 650
}
function beerfc(d){
    if(d < 6)
        return 1200
    
    else
        return 2000
}
function refrifc(d){
    if(d < 6)
        return 1000
    
    else
        return 1500
}





    
    
