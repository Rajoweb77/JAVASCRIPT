//-------------------------------ARRAY -> INSIEME DI DATI STRUTTURATI---------------------------

let array = []; // -> array vuoto

// ARRAY DI NOMI
let array1 = ["Diego","Pippo","Luca","Marco","Giorgia","Lucia"];

//ARRAY DI NUMERI
let arrayN = [4,6,3,6,74,34];

//console.log(array1);
//console.log(array1[4]);

//console.log(arrayN[2]);
//console.log(array);


//Modifica di valori
//console.log(arrayN);
arrayN[1] = 99;
//console.log(arrayN);

//modificare Nome "Pippo" dell array1 con il vostro nome 
//e fare consolelog dell array con i nuovi dati che il singolo nome




//-------------------------------------------METODI MANIPOLAZIONE ARRAY------------------------------------------





//-----------------------------AGGIUNGERE UN ELEMENTO ALLA FINE
let arrayNumeri = [4,6,3,6,74,34];
//console.log(arrayNumeri);

arrayNumeri.push(50); //aggiungo 50 alla fine

//console.log(arrayNumeri);





//---------------------------------TOGLIERE L ULTIMO ELEMENTO
arrayNumeri.pop(); // rimuovo l ultimo elemento
console.log(arrayNumeri);
//Con ".length" conosco il numero degli elementi dell array
console.log("L'array contiene " + arrayNumeri.length + " elementi");





//------------------------------AGGIUNGERE UN ELEMENTO ALL INIZIO
arrayNumeri.unshift("pippo");
arrayNumeri.unshift(false);
console.log(arrayNumeri);


//-------------------------------RIMUOVERE UN ELEMENTO ALL INIZIO
arrayNumeri.shift();
console.log(arrayNumeri);




//-----------------TROVARE LA POSIZIONE DI UN ELEMENTO NELL ARRAY CONOSCENDO L ELEMENTO DA CERCARE
let auto = ["Audi", "Volvo", "Bmw", "Fiat"];
let posizione = auto.indexOf("Fiat");
console.log(posizione);




//-------------------------------------UNIRE DUE ARRAY

let a = ["uno", "due"];
let b = ["tre", "quattro"];

let arrayUnito = a.concat(b);
let arrayUnitoR = b.concat(a);

console.log(arrayUnito);
console.log(arrayUnitoR);




//----------------------VERIFICARE SE UN ELEMENTO è PRESENTE NELL ARRAY
let moto = ["Honda", "Kawasaki", "Bmw", "Suzuki"];

let ricercaNome = moto.includes("Fiat");
let ricercaNome2 = moto.includes("Honda");

console.log(ricercaNome);
console.log(ricercaNome2);




//--------------------------------TRASFORMARE L ARRAY IN UNA STRINGA
let animali = ["Cane", "Gatto", "Capra"];

let frase = animali.join(" - ");

console.log(frase);




//Conversione dato da Numero a Stringa

let numero = 8;
let numero2 = numero.toString();

console.log(numero2);
console.log(typeof numero2);

