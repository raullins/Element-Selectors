// Element Selectors = Métodos usados para marcar e manipular elementos HTML.
//                     Eles permitem selecionar um ou mais elementos HTML do DOM(document object model)

// 1. document.getElementById()          // ELEMENTO OU NULL
const meuH1 = document.getElementById("meuH1");

meuH1.style.backgroundColor = "orange";
meuH1.style.textAlign = "center";

console.log(meuH1);


// 2. document.getElementsClassName()    // COLEÇÃO HTML(MAIS DE UM ELEMENTO)
const frutas = document.getElementsByClassName("fruta");

frutas[0].style.backgroundColor = "red"
frutas[1].style.backgroundColor = "purple"
frutas[2].style.backgroundColor = "yellow"

/*
for(let i = 0; i <= frutas.length; i++){
    frutas[i].style.backgroundColor = "green";
}

for(let fruta of frutas){
    fruta.style.backgroundColor = "blue";
    fruta.style.color = "white";
}
*/

// Aqui estamos transformando a coleção HTML frutas em um Array, para em seguida usar o método "forEach()".
Array.from(frutas).forEach(fruta =>{
    fruta.style.textAlign = "center";
})

// 3. document.getElementsByTagName()    // COLEÇÃO HTML(MAIS DE UM ELEMENTO)
// A coleção não é um Array, mas voce pode transformar ela num array utilizando "Array.from(nomeDaColeção)"
const pfs = document.getElementsByTagName("h4");
const pfsComponentes = document.getElementsByTagName("li");

/*
for(let pf of pfs){
    pf.style.backgroundColor = "brown";
}
*/

Array.from(pfs).forEach(pf =>{
   pf.style.backgroundColor = "brown" 
})

for(let pfsComponente of pfsComponentes){
    pfsComponente.style.backgroundColor = "lightgreen";
}

// 4. document.querySelector()           // ELEMENTO OU NULL
// Vai retornar o primeiro elemento em ordem de apresentação no HTML, do tipo especificado. Dá pra selecionar uma .class ou uma tag.

// 5. document.querySelectorAll()        // NODELIST
// Tem um built-in forEach() método.

const comidas = document.querySelectorAll("li");

comidas.forEach(comida =>{
    comida.style.fontWeight = "bold";
})