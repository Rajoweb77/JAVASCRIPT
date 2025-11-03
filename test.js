let media =0;
let voti = [];

    for(let i = 0; i < 5; i++ ){
        
        let voto = parseInt(prompt("inserisci il voto" +  (i+1) + " di 5"));
        voti.push(voto);
        media += voto;
        
    }

    function calcolaMedia(x,y){

        return media / voti.length;
    
    }

    if(calcolaMedia() >= 6){ 
        
        alert("la classe è passata" + "la media della classe è " + calcolaMedia() + " i voto sono stati" + voti.join(", "));

    }else{
        
        alert("la classe è bocciata - " + "la media della classe è " + calcolaMedia() + " i voto sono stati" + voti.join(", "));

    };


console.log(media/5);