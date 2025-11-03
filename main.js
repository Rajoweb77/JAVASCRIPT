// inline
/*

su piu righe
altra riga

*/


// ---------------------------------------------   TIPI DI VARIABILI  ---------------------------------------

//STRINGA
var nome = "Pippo"; // stringa cioè una "parola"

//stampa in console il nome pippo
console.log(nome);


//NUMERICO
//intero
var numero = 8; // numero
//decimale 
var numDecimale = 10.99; // numero decimale
//valori negativi
var numNegativo = -5; 

//console.log(numero);
//console.log(numDecimale);
//console.log(numNegativo);

const pigreco = 3.14; // valore che non cambia in tutto il codice

//BOOLEANO
//Verifica di veridicità booleana
var lampadinaAccesa = true;
var lampadinaSpenta = false;

console.log("Questo è il console.log della variabile lampadinaAccesa : " , lampadinaAccesa);
console.log("Questo è il console.log della variabile lampadinaSpenta : " , lampadinaSpenta);



//Dichiarazioni di variabili -> LET 

var numSomma1 = 5;

var numSomma1 = 7;

var numSomma1 = 10;

var numSomma1 = "sette";
console.log(numSomma1);
var numSomma1 = "otto";
console.log(numSomma1);


let numeroLet = 56;

//dopo 10000 righe

let numeroLet3 = 45;


//----------------------------- OPERATORI aritmetici ------------------------------

// + (ADDIZIONE) , 
// - (SOTTRAZIONE) , 
// / (DIVISIONE) , 
// * (MOLTIPLICAZIONE),
// % (RESTO O MODULO)


//ESEMPIO BASE DI SOMMA

let num1Somma = 6;
let num2Somma = 8;

//la somma delle due variabili
let somma = num1Somma + num2Somma;

console.log("La somma è di : ", somma);




//ESEMPIO BASE DI SOTTRAZIONE

let num1Sottrazione = 10;
let num2Sottrazione = 5;

//la sottrazione tra le due variabili
let sottrazione = num1Sottrazione - num2Sottrazione;

console.log("La sottrazione è di : ", sottrazione);




//ESEMPIO DI MOLTIPLICAZIONE

let num1Moltiplicazione = 5;
let num2Moltiplicazione = 5;

let moltiplicazione = num1Moltiplicazione * num2Moltiplicazione;

console.log("Il risultato della moltiplicazione è di : ",moltiplicazione);


//ESEMPIO DI DIVISIONE

let num1Divisione = 100;
let num2Divisione = 5

let divisione = num1Divisione / num2Divisione;

console.log("Il risultato della divisione è di : ", divisione);


//ESEMPIO DI MODULO 

let a = 13;
let b = 5;

let modulo = a % b; // si legge "a modulo b"

console.log("Il resto è : ", modulo); 


// COME CHIEDERE DATI ALL UTENTE TRAMITE PROMPT()

//chiedi il nome all utente

//let nomeInserito = prompt("Inserisci un nome");

//console.log(nomeInserito);


//chiedi un numero all utente tramite prompt -> parseInt gestisce i numeri interi inseriti
//                                              parseFloat gestisce i numeri decimali

/*

let numeroInserito1 = parseInt(prompt("Inserisci primo numero"));
let numeroInserito2 = parseInt(prompt("Inserisci secondo numero"));

let sommaNumeri = numeroInserito1 + numeroInserito2;

console.log("La somma dei due numeri inseriti è : " ,sommaNumeri);

//Mostro a schermo il risultato
alert("La somma dei due numeri inseriti è : " + sommaNumeri);

*/
//console.log(numeroInserito);


//---------------------------------------------- CONDIZIONI IF ELSE -------------
/*
//confronto banale di due password (parole)
let password1 = prompt("Inserisci la tua password : ");

let password2 = prompt("Conferma la tua password : ");

if ( password1 === password2  ){

    alert("Ok sei dentro");


} else {

    alert("Le password sono diverse, mi spiace.");

}*/

//Esempio emulazione confronto password captcha
/*
let passwordInserita = prompt("INSERISCI L PASSWORD");

let passwordBackend = "pippo";

if (passwordInserita === passwordBackend){

    alert("ok, PASSWORD ");

}else {

    alert("no");
}
*/



//------------------------ ESEMPIO IF ELSE SEMAFORO

/*
let colore = prompt("inserisci il colore del semaforo( rosso, giallo o verde");


colore = colore.toLowerCase(); // converte tutto in minuscolo ( per evitare errori del tipo "rosso" , "Rosso")

if (colore === "rosso"){

    alert("fermati");

}else if (colore === "giallo") {

    alert("indecisione");

}else if (colore === "verde") {

    alert("passa");

}


*/



//------------------------ CHIEDI ALL UTENTE UN NUMERO E VERIFICA SE PARI O DISPARI
/*
let numeroPD = parseInt(prompt("Inserisci un numero : "));


if (numeroPD % 2 === 0) {

  alert(numeroPD + " è un numero pari.");

} else {
  
  console.log(numeroPD + " è un numero dispari.");

}
*/


//----------------------------------------------- OPERATORI DI CONFRONTO ----------------------

//Servono per confrontare due valori e restituire un risultato booleano (VERO, FALSO)

//Controllo maggiore o minore : chiedo 2 numeri 
/*
let n1 = parseInt(prompt("Inserisci il primo numero : "));
let n2 = parseInt(prompt("Inserisci il secondo numero : "));

if (n1 > n2){

    alert(n1 + " è maggiore di " + n2);

}else if (n1 < n2 ){

    alert(n1 + " è minore di " + n2);

}else{//questa è un eccezione

    alert("i numeri sono uguali");

}

*/





//Esempio CONTROLLO ETA' MINORENNE MAGGIORENNE
/*
let eta = parseInt(prompt("Inserisci la tua età : "));

if (eta >= 18 ){

    alert("Sei maggiorenne");

}else {

    alert("Sei minorenne");
}
*/



//Esempio CONTROLLO PASSWORD DIVERSA     != si chiama NOT-EQUAL
/*
let pwrd = prompt("Inserisci la password : ");
let pwrdCorretta = "pippo";

if(pwrd !== pwrdCorretta){

    alert("Password errata");

}else {

    alert("Accesso consentito!");
}
*/


//ESERCIZIO :

/*
    CHIEDERE UN VOTO E DIRE SE è SUFFICIENTE O INSUFFICIENTE
*/

/*
let voto = parseInt(prompt("inserisci il voto : "));

if (voto >= 6 ){

    alert("promosso");
    
}else {

    alert("bocciato");
}
*/



//-------------------------------------------------- OPERATORI LOGICI ----------------------

//  && AND LOGICO  CONFRONTO "Entrambe"
//  || OR  LOGICO  CONFRONTO "OPPURE"
//  !  NOT LOGICO  NEGAZIONE "NON ESISTENZA"




//ESEMPIO && : chiedi l età e consenti l accesso solo tra i 18 e i 65 anni

let eta = parseInt(prompt("inserisci la tua età : "));

if(eta >= 18 && eta <= 65){

    alert("accesso consentito");

}else if (eta < 18){

    alert("Accesso non consentito, sei minorenne!");

}else {

    alert("Età massima consentita 65");
}



//ESEMPIO || : chiedere il giorno della settimana e dire se è weekend oppure no

let giorno = prompt("Inserisci il giorno della settimana : ").toLowerCase();//converto in minuscolo

//controllo se è SABATO o DOMENICA

if (giorno === "sabato" || giorno === "domenica"){

    alert("è Weekend");

}else {

    alert("giorno feriale");
}


//ESEMPIO || : chiedere il mese inserito e dire se è estate oppure no
/*
let mese = prompt("Inserisci il mese : ").toLowerCase();//converto in minuscolo

//controllo se è giugno luglio agosto 

if (mese === "giugno" || mese === "luglio" || mese === "agosto" ){

    alert("è estate");

}else {

    alert("non è estate");
}
*/


//ESEMPIO || : chiedo un mese, e voglio sapere a quale stagione appartiene

let mese = prompt("Inserisci il mese : ").toLowerCase();//converto in minuscolo

if (mese === "giugno" || mese === "luglio" || mese === "agosto" ){

    alert("è estate");

}else if (mese === "settembre" || mese === "ottobre" || mese === "novembre" ){

    alert("è autunno");

}else if (mese === "dicembre" || mese === "gennaio" || mese === "febbraio" ){

    alert("è inverno");

}else if (mese === "marzo" || mese === "aprile" || mese === "maggio" ){

    alert("è primavera");

}else{

    alert("?? mese non riconsciuto");
}


//ESEMPIO : chiedo un mese, e voglio sapere di che stagione appartiene e quanti giorni ha il mese 30,31,28,29

let meseN = prompt("Inserisci il mese : ").toLowerCase();//converto in minuscolo

if (mese === "gennaio"){

    alert("Gennaio appartiene all ainverno ed ha 31 giorni");

}else if (mese === "febbraio"){

    alert("Febbraio appartiene all inveron e ha 28 o 29 giorni");

};// continua...