// //DIFERENÇA ENTRE LET/VAR/CONST
// // var nome = "Kayque";
// // if(nome == "Kayque"){
// //     let nome = "Denise";
// // }
// // console.log(nome);

//  //Recuperando um elemento button que está no index.html
//  const btn  = document.getElementById("meu-btn");
 
//  //Atrelando um evento de click ao button que foi recuperado.

//  btn.addEventListener("click" , function(){
    
//     //função matematica - math
//     //ranaon = gera numeros random entre 0 e 1 Ex: 0.3278687
//     //floor = arredonda o número para baixo
//     //ceil = arredonda o número para cima.
//     //round = arredonda o número aleatoriamente
//     let r,g,b;
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);
    
//     //adicionando um atributo ao elemento button
//     //this.setAttribute("nome di atributo" , "valor do atributo")
//     this.setAttribute("style" , `background-color: rgb(${r},${g},${b});`);
//  } );

// //desafio
// //recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha
// //altere a cor de fundo e a cor do texto quando o evento ocorrer

// const tit = document.getElementById("meu-tit");

// tit.addEventListener("mouseover", function(){

//     let red,green,blue,red1,green1,blue1;
//     red = Math.round(Math.random()*255);
//     green = Math.round(Math.random()*255);
//     blue = Math.round(Math.random()*255);
//     red1 = Math.round(Math.random()*255);
//     green1 = Math.round(Math.random()*255);
//     blue1 = Math.round(Math.random()*255);

//     this.setAttribute("style", `color: rgb(${red},${green},${blue});background-color: rgb(${red1},${green1},${blue1});`);
    


// });

// let frutas = ["maçã", "laranja", "banana", "uva", "caqui"]
// console.log(frutas)
// console.log("Tamanho do array: " + frutas.length)
// console.log("Pegando um item do array: " + frutas[0]);
// console.log("Pegando um item do array: " + frutas[1]);
// console.log("Pegando um item do array: " + frutas[2]);
// console.log("Pegando um item do array: " + frutas[3]);
// console.log("Pegando um item do array: " + frutas[4]);
// console.log("Pegando um item do array: " + frutas[5]);
// //para verificar o tamanho do array, utilizamos a propriedade lenght

// //iterando o array com estrutura de repetição : foreach

// //add item no fim do array com push
// frutas.push("melão");
// console.log(frutas);

// //add item no começo do array com unshift
// frutas.unshift("melancia");
// console.table(frutas);

// //removendo item do fim com pop
// frutas.pop();
// console.table(frutas);

// //removendo item do começo com shift
// frutas.shift();
// console.table(frutas);

// //localizando um determinado item dentro do array com indexOf(item);
// let indice = frutas.indexOf("banana");
// console.log("Item que estava no local antes da remoção: " + frutas[indice]);
// frutas.splice(indice, 2)
// console.log("item que foi localizado no array: " + frutas[indice]);
// console.table(frutas)

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log(nr1);
// console.log(nr2);

// //concatenando arrays
// let nr3 = [...nr1, ...nr2];
// console.log("novo array: " + nr3);

// //imprimindo o array concatenando com o operador spread( ... )
// //imprimindo com foreach

// nr3.forEach((nr)=>{
//     console.log("item do novo array: " + nr)
// });

//convertendo HTMLCollection em Arrays
// const imgElements = document.getElementsByTagName("img");

// const imgElementsArray = [...imgElements];
// console.log(imgElementsArray)
// imgElementsArray.forEach((img)=>{
//     img.setAttribute("width", "5%")
// });

//recupere uma collections de elementos do tipo( a )
//identifique aqueles que são pertencentes somente ao cabeçalho e add o atributo style com o a propriedade background-color: #ff0000

const aElements = [...document.getElementsByTagName("a")];
console.log(aElements);

aElements.forEach((a)=>{
    let textoDoA = a.textContent;
    if(textoDoA == "Home" || textoDoA == "Info" || textoDoA == "Item-3"){
        a.setAttribute("style", `background-color: #ff0000`)
    }
});
