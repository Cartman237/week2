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
var resultaat = randomiser(lingobieb);
for (let u = 0; u < resultaat.length ; u++){
    console.log(resultaat[u]);
    document.getElementById("r0v0").value = resultaat[0]; // EERSTE LETTER VAN RANDOMISER
}
/*
var rij1 = ("1A","1B","1C","1D","1E");
var rij2 = ("2A","2B","2C","2D","2E");
var rij3 = ("3A","3B","3C","3D","3E");
var rij4 = ("4A","4B","4C","4D","4E");
var rij5 = ("5A","5B","5C","5D","5E");

var rij = 0;

function invoer(){
    let woord = document.getElementById(rij).value;
    console.log(woord);
    if(woord == resultaat[u]){
        alert(woord);
    }
    else{
        alert(resultaat[u]);
    }
}
*/
var r = 0;
var v = 0;
function invoer(){
    document.getElementById("r0v0").value = resultaat[0];
    let woord = document.getElementById("invoer").value;
/*    console.log(woord);
    if( woord.length == 5 ){
        alert("CORRECT: Wel 5 letters!");
    }
    else{
        alert("INCORRECT: Niet 5 letters")
    }
    document.getElementById("invoer").value;
    document.getElementById("r0v0").value = woord [0];
    document.getElementById("r0v1").value = woord [1];
    document.getElementById("r0v2").value = woord [2];
    document.getElementById("r0v3").value = woord [3];
    document.getElementById("r0v4").value = woord [4]; */
    for( let w = 0 ; w < woord.length ; w++ ){
        console.log(woord[w]);
        document.getElementById("r"+r+"v"+w).value = woord[w];
    }
    if( woord != resultaat){
        console.log("FOUT!");
        alert("FOUT!");
        document.getElementById("r"+r+"v0").value = resultaat[0];
    }
    else{
        console.log("GOED!");
        alert("GOED!");
        document.getElementById("invoer").disabled = true;
    }
    r++;
    document.getElementById("invoer").value = '';
}

function nieuw(){
    document.getElementById("invoer").value = '';
    document.getElementById("r0v0").value = '';
    document.getElementById("r0v1").value = '';
    document.getElementById("r0v2").value = '';
    document.getElementById("r0v3").value = '';
    document.getElementById("r0v4").value = '';
    document.getElementById("r1v0").value = '';
    document.getElementById("r1v1").value = '';
    document.getElementById("r1v2").value = '';
    document.getElementById("r1v3").value = '';
    document.getElementById("r1v4").value = '';
    document.getElementById("r2v0").value = '';
    document.getElementById("r2v1").value = '';
    document.getElementById("r2v2").value = '';
    document.getElementById("r2v3").value = '';
    document.getElementById("r2v4").value = '';
    document.getElementById("r3v0").value = '';
    document.getElementById("r3v1").value = '';
    document.getElementById("r3v2").value = '';
    document.getElementById("r3v3").value = '';
    document.getElementById("r3v4").value = '';
    document.getElementById("r4v0").value = '';
    document.getElementById("r4v1").value = '';
    document.getElementById("r4v2").value = '';
    document.getElementById("r4v3").value = '';
    document.getElementById("r4v4").value = '';
    location.reload();
}

function autotab(current,to){
    if (current.getAttribute && current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
    }
}