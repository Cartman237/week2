const lingobieb = ["fiets", "hallo", "lopen", "pizza", "regen"];

function randomiser(bieb){
    let random = Math.floor(Math.random() * bieb.length);
    let lingowoord = lingobieb[random];
    return lingowoord;
}
var resultaat = randomiser(lingobieb);
console.log(resultaat);

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