const lingobieb = ["fiets", "hallo", "lopen", "pizza", "regen"];
/*
function randomiser(bieb){
    let random = Math.floor(Math.random() * bieb.length);
    let lingowoord = lingobieb[random];
    return lingowoord;
}
var resultaat = randomiser(lingobieb);
console.log(resultaat);
*/

function randomiser(bieb){
    let random = Math.floor(Math.random() * bieb.length);
    let lingowoord = lingobieb[random];
    return lingowoord;
}
var resultaat = randomiser(lingobieb); // EERSTE LETTER VAN RANDOMISER
for (var u = 0; u < resultaat.length ; u++){
    console.log(resultaat[u]);
    document.getElementById("1A").value = resultaat[0];
}
/*
var rij1 = ("1A","1B","1C","1D","1E");
var rij2 = ("2A","2B","2C","2D","2E");
var rij3 = ("3A","3B","3C","3D","3E");
var rij4 = ("4A","4B","4C","4D","4E");
var rij5 = ("5A","5B","5C","5D","5E");
*/
var rij = 0;

function invoer(){
    let woord = document.getElementById().value;
    console.log(woord);
    if(woord == resultaat[u]){
        alert(woord);
    }
    else{
        alert(resultaat[u]);
    }
}
/*
function invoer(){
    let woord = document.getElementById("invoer").value;
    console.log(woord);
    if( woord.length == 5 ){
        alert("CORRECT: Wel 5 letters!");
    }
    else{
        alert("INCORRECT: Niet 5 letters")
    }
    if( woord == resultaat ){
        alert("Correct geraden!");
    }
    else{
        alert("Incorrect geraden!")
    }
}
*/
function nieuw(){
    let vernieuw = document.getElementById("invoer").value = '';
    location.reload();
}

function autotab(current,to){
    if (current.getAttribute && current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
        }
    }