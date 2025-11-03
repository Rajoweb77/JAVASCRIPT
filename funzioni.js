
//----------------------------------FUNZIONI

//Composta da function, nomeFunzione() { cio' che fa la funzione };

//-------------------------FUNZIONE SEMPLICE

//       nomefunzione
function saluta() {

    //cio' che fa la funzione
    alert("Ciao ecco la prima funzione!");

}


//invocare la funzione
saluta();




//------------------------FUNZIONE CON PARAMETRI

// struttura funzione con param e return

function nomeFunzione(parametri) {

    //istruzioni da eseguire
    return risultato;
}

//funzione saluta() con parametri

function salutaUtente(nome){

    console.log("Ciao " + nome + "!");

}

//Invoco la funzione
salutaUtente("Diego@gmail.com");
salutaUtente("Marco");
salutaUtente(9);




//-----------------------------ESEMPI DI FUNZIONI--------------------------


function somma(a, b){

    return a + b;

}

let risultatoS = somma(15,3);
console.log("Il risultato della somma è: ", risultatoS);


function sottrazione(a, b){

    return a - b;
    
}

let risultatoST = sottrazione(15,3);
console.log("Il risultato della sottrazione è: ", risultatoST);



function divisione(a, b){

    return a / b;
    
}

let risultatoD = divisione(15,3);
console.log("Il risultato della divisione è: ", risultatoD);



function moltiplicazione(a, b){

    return a * b;
    
}

let risultatoM = moltiplicazione(15,3);
console.log("Il risultato della moltiplicazione è: ", risultatoM);


//Function della potenza di un numero con **

function potenza(a){

    return a **2;
}

console.log("Ecco la potenza : ",potenza(3));
console.log("Ecco la potenza : ",potenza(5));

//Fucntion con gestione con due agromenti
function potenzaB(base,esponente){

    const risultato = base ** esponente;

    return risultato;
}

console.log(potenzaB(2, 3)); // output 8
console.log(potenzaB(5, 2)); // output 25



//Function della potenza di un numero con Math.pow (funzione dentro un altr funzione)
function potenzaM(base,esponente){

    return Math.pow(base, esponente);

}

console.log(potenzaM(2, 3)); // output 8
console.log(potenzaM(5, 2)); // output 25




//  Esercizio 1: Controlla se una persona è maggiorenne 
//               chiedi all utente l età e manda un messaggio che dice se maggiorenne o minorenne


//chiedo l eta all utente

let etaUtente = parseInt(prompt("Inserisci l età"));

//funzione che verifica se minoreene o maggiorenne
function verificaEta(eta){

    if(eta >= 18 ){

        return "Sei maggiorenne";
    }else{
        return "Sei minorenne";
    }
}

let messaggio = verificaEta(etaUtente);

alert(messaggio);



//  Esercizio 2: Creare una funzione che calcola il prezzo di un prodotto 
//               in base alla percentuale di sconto inserito dall utente
//               chiedi all utente il prezzo del prodotto e la % di sconto
//               i prezzi sono decimali -> parseFloat
//               risultato.toFixed(2); 


//chiedo prezzo prodotto
let prezzoIniziale = parseFloat(prompt("Inserisci il prezzo del prodotto : "));

//chiedo la % dello sconto
let percentualeSconto = parseFloat(prompt("Inserisci la percentuale di sconto : "));

//calcolo sconto
function calcolaSconto(prezzo, sconto){

    let prezzoScontato = prezzo - (prezzo * sconto / 100);

    return prezzoScontato.toFixed(2);
}


let risultato = calcolaSconto(prezzoIniziale, percentualeSconto);

alert("\nPrezzo iniziale : euro " + prezzoIniziale.toFixed(2) + "\n Sconto applicato : " + percentualeSconto + "%" + "\n Prezzo finale : euro " + risultato);


