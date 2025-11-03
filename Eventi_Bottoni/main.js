
// Vado a prendere il tag che contiene l id "mostraMessaggio" nell html
const bottone = document.getElementById("mostraMessaggio");

bottone.addEventListener("click", function(){

    alert("Ciao hai cliccato il bottone");
    console.log("ciao hai cliccato");
    

});


//cambiare il testo del p con il click sul bottone
const btnCambiaTesto = document.getElementById("cambiaTesto");
const testo = document.getElementById("testo");

btnCambiaTesto.addEventListener("click", function(){

    testo.textContent = "Hai cliccato , il testo è cambiato";

});


//cambia colore della pagina
const btnColore = document.getElementById("cambiaColore");

btnColore.addEventListener("click", function(){

    document.body.style.backgroundColor = "coral";

});



//CONTATORE AL CLICK
const contaBtn = document.getElementById("contaBtn");
const contatore = document.getElementById("contatore");

let numero = 0; //variabile per tenere il conto

contaBtn.addEventListener("click", function(){

    numero++;
    contatore.textContent = numero;

});


//Evento Toggle Mostro nascondo elemento
const toggleBtn = document.getElementById("toggleBtn");
const testoNascosto = document.getElementById("testoNascosto");

toggleBtn.addEventListener("click", function(){

    testoNascosto.style.display = "inline";

});


