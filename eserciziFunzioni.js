//   Esercizio

// Calcolo della media voti di una classe
// - Il utente inserisce i voti di 5 studenti
// - Una funzione calcola la media
// - Viene mostrato se la classe è promossa o bocciata ( media >= 6)


//array voticlasse
let votiClasse = [];

//chiedo 5 voti all utente
for ( let i = 0;i < 5; i++){

    let voto = parseFloat(prompt("Inserisci il voto dello studente :"));
    votiClasse.push(voto);

}


//funzione calcola media
function calcolaMedia(voti){ //riceve un array come parametro

    let somma = 0;

    for (let i = 0; i < voti.length; i++){
        somma += voti[i];
    }

    let media = somma / voti.length;
    return media;
}


let mediaB = calcolaMedia(votiClasse);

//controllo se la classe è promossa o bocciata
if(mediaB >= 6){

    alert("Classe promossa");
}else {

    alert("classe bocciata");
}

//mostra risultato classe
alert("Voti inseriti : " + votiClasse.join(", "));
alert("la media della classe è : "+ mediaB.toFixed(2));









