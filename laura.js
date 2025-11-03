let voti = [];
let somma = 0;

for(i=0; i<5; i++){
    let votoInserito = parseFloat(prompt("inserisci voto studente numero" + (i + 1)));
    voti.push(votoInserito); somma += votoInserito;
}

function calcoloMedia(voti,somma){
    
    let media = somma / voti.length;
  
    if (media >= 6){
    alert("Promossi con la media del " + media.toFixed(2));
    } else {
            alert("Bocciati con. la media del " + media.toFixed(2));
    }
} 
calcoloMedia(voti, somma);