//DIFERENÇA ENTRE LET/VAR/CONST
// var nome = "Kayque";
// if(nome == "Kayque"){
//     let nome = "Denise";
// }
// console.log(nome);

 //Recuperando um elemento button que está no index.html
 const btn  = document.getElementById("meu-btn");
 
 //Atrelando um evento de click ao button que foi recuperado.

 btn.addEventListener("click" , function(){
    
    //função matematica - math
    //ranaon = gera numeros random entre 0 e 1 Ex: 0.3278687
    //floor = arredonda o número para baixo
    //ceil = arredonda o número para cima.
    //round = arredonda o número aleatoriamente
    let r,g,b;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    //adicionando um atributo ao elemento button
    //this.setAttribute("nome di atributo" , "valor do atributo")
    this.setAttribute("style" , `background-color: rgb(${r},${g},${b});`);
 } );

//desafio
//recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha
//altere a cor de fundo e a cor do texto quando o evento ocorrer

const tit = document.getElementById("meu-tit");

tit.addEventListener("mouseover", function(){

    let red,green,blue,red1,green1,blue1;
    red = Math.round(Math.random()*255);
    green = Math.round(Math.random()*255);
    blue = Math.round(Math.random()*255);
    red1 = Math.round(Math.random()*255);
    green1 = Math.round(Math.random()*255);
    blue1 = Math.round(Math.random()*255);

    this.setAttribute("style", `color: rgb(${red},${green},${blue});background-color: rgb(${red1},${green1},${blue1});`);
    


});
