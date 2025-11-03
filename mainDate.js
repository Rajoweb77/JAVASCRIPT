//------------------------ DATE IN JAVASCRIPT -------------------------

//Instanziare o dichiarare un nuovo oggetto di tipo DATE()

let oggi = new Date(); //data e ora attuale

let dataSpecifica = new Date("2025-10-20");

console.log("Oggi è " + oggi.toLocaleDateString() + " e sono le " + oggi.toLocaleTimeString());


let giorno = oggi.getDate();
let mese = oggi.getMonth() + 1; // perchè i mesi partono da 0
let anno = oggi.getFullYear();

console.log("oggi è il " + giorno + "/" + mese + "/" + anno);



//"oggi" è un oggetto data, si porta con sè altre funzioni che risiedono nel tipo di oggetto data
// quindi se scrivo oggi.qualcosa()  mi ritornerà un azione dell oggetto Date