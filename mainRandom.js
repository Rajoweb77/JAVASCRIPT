//------------------MATH.RANDOM()    MATH.FLOOR()   MATH.CEIL() -------------------


//generare un numero casuale tra 0 e 1

let numero = Math.random();

console.log(numero);

//generare UN numero casuale tra 0 e 9

let num = Math.floor(Math.random() * 10);

console.log(num);

//generare UN numero casuale tra 1 e 10

let num1 = Math.floor(Math.random() * 10) + 1;

console.log(num1);


//LANCIO DEL DADO

let dado = Math.floor(Math.random() * 6) + 1;

console.log("hai tirato il dado ed il risultato è : " + dado);





// Esercizi : 

// 1) Il computer genera un numero da 1 a 10 e l utente deve indovinare il numero

    //numero casuale del pc

    let numeroCausuale = Math.floor(Math.random() * 10) + 1;


    //chiedere all utente di indovinare il numero

    let tentativo = parseInt(prompt("Inserisci qui il numero tra 1 e 10"));

    //controllo se indovinato

    if ( numeroCausuale === tentativo){

        console.log("hai preso il numero")
    }else {

        console.log("hai sbagliato, ritenta, il numero casuale era : " + numeroCausuale);
    }



// 2) Doppio lancio dei dadi, sommarli e mostrare risultato

    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let somma = dado1 + dado2;

    alert("hai tirato " + dado1 + "e" + dado2 + "la somma è di : " + somma);



// 3) Generare un numero casuale tra 1 e 20 e dire se è pari o dispari

    let numPD = Math.floor(Math.random() * 20) + 1;

    if(numPD % 2 === 0){

        alert("Il numero " + numPD + "è pari");
    }else {

        alert("il numero" + numPD + "è dispari");
    }



// 4) Simulare un lancio di una moneta e dire se risulta Testa o Croce

    //random su 2 lati

    alert("La moneta sta per essere lanciata!");

    let moneta = Math.floor(Math.random() * 2);

   
    //if se risulta n testa
    //else croce

    if (moneta === 0){

        alert("è uscito Testa");
    }else{

        alert("è uscito croce");
    }

     console.log(moneta);






