var a = 0;
var b = 0;
var c = 0;
var d = 0;

var calcularMedia = 0;

a = prompt("Digite un número a")
b = prompt("Digite un número b")
c = prompt("Digite un número c")
d = prompt("Digite un número d")
calcularMedia = media(a,b,c,d);

function media(nA, nB, nC, nD) {
    const result = (parseInt(nA) + parseInt(nB) + parseInt(nC) + parseInt(nD))/ 4;
    console.log("La media de los números es: " + result)
}