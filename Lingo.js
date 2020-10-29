const lingobieb = ["fiets", "hallo", "lopen", "pizza", "regen"];

var rij1 = ("1A","1B","1C","1D","1E");
var rij2 = ("2A","2B","2C","2D","2E");
var rij3 = ("3A","3B","3C","3D","3E");
var rij4 = ("4A","4B","4C","4D","4E");
var rij5 = ("5A","5B","5C","5D","5E");

function invoer(){
    let woord = document.getElementById(rij1).value;
    console.log(woord);
    console.log(rij1);
    if( woord.length == 5 ){
        alert("CORRECT: Wel 5 letters!");
    }
    else{
        alert("INCORRECT: Niet 5 letters")
    }
}

function nieuw(){
    alert("Vernieuwd!");
}