/*

- evento su un quadrato che cambia colore al passaggio del mouse sia se ci passo sopra(mousein) che se ci esco(mouseout)

- mostrare un testo di un <p> con il doppioclick 

- tasti premuti sulla tastiera :  scatena un alert 
                                  se clicco la freccia su e un console.log se clicco la freccia giu


*/


//evento su un quadrato che cambia colore al passaggio del mouse sia se ci passo sopra(mousein) che se ci esco(mouseout)
const box = document.getElementById("box");

box.addEventListener("mouseover", function(){

    box.style.backgroundColor = "lightgreen"; // cambia colore

});

box.addEventListener("mouseout", function(){

    box.style.backgroundColor = "tomato";

});




//mostrare un testo di un <p> con il doppioclick 
const testo = document.getElementById("testo");

testo.addEventListener("dblclick", function(){

    testo.textContent = "hai cliccato ora il testo è cambiato!";

});



// tasti premuti sulla tastiera :  
// scatena un alert se clicco la freccia su 
// e un console.log se clicco la freccia giu

//ASCOLTO LA PRESSIONE DEI TASTI SU TUTTO IL DOCUMENT

document.addEventListener("keydown", function(event){

    //controllo quale tasto è stato premuto
    if(event.key === "ArrowUp"){

        alert("tasto freccia SU premuto");
    }else if ( event.key === "ArrowDown") {

        console.log("hai premuto la freccia GIU");
    }
});

