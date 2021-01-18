var nome= "Ivan Mateus Honemann";
var cargo= "DEVELOPER"
var nomeHtml = document.getElementById("nome-do-html");
var cargoHtml =document.getElementById("cargo-no-html");
var texto2 = document.getElementById("texto-2");
var texto1= document.getElementById("texto-1");
function colocarNomeNoHtml(nome){
nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
cargoHtml.innerHTML= cargo;
}

function logarNome(){
    console.log(nome);
}

function clickNoProjeto(){
    console.log("clicou no botão projetos");
    texto2.style.display="block";
    texto1.style.display="none";
}

function clickNoSobre(){
    console.log("clicou no botão sobre");
    texto1.style.display="block";
    texto2.style.display="none"; 
}




colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);