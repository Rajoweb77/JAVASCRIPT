//ROTAZIONE

const quadrato = document.getElementById("quadrato");
const bottone = document.getElementById("ruotaBtn");

bottone.addEventListener("click", function(){

    quadrato.classList.toggle("rotato");

});




//ROTAZIONE CONTINUA E CAMBIO COLORI RANDOM
const box = document.getElementById("box");
const animaBtn = document.getElementById("animaBtn");

let rotazione = 0; // valore inziale della rotazione

animaBtn.addEventListener("click", function(){

    rotazione += 360; //aggiungo 360° ogni click
    box.style.transform = `rotate(${rotazione}deg)`;
    
    //genero un colore casuale
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random()* 255);
    const b = Math.floor(Math.random()* 255);
    
    //template literals per innestare elementi in pagina
    box.style.background = `rgb(${r}, ${g}, ${b})`;
    
});