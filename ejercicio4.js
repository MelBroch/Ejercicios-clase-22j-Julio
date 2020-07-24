var tipoBox=0; //falso
var tipoCaja=1; //verdadero
const padding=10;
const width=300;
const border=2;

var calcularCaja=0;
tipo= parseInt(prompt('Ingrese el tipo de caja a dibujar//0=Border//1=Content'));

calcularCaja= caja(tipo, padding,width, border);
var tipoBox = 0; //Border.falso
var tipoCaja = 1; //Content.verdadero
const padding = 10;
const width = 300;
const border = 2;
var calcularCaja =0;
tipo = parseInt(prompt('Ingrese el tipo de caja a dibujar // 0 = Border // 1 = Content '));
calcularCaja = caja (tipo,padding,width,border);
function caja(tipoCaja, p, w, b){
    if (tipoCaja === 0) {
        console.log( 'El ancho del contenido es: ${w} pixeles'); 
    } else if (tipoCaja === 1){
        console.log( 'El ancho del Border-box es de: ${p+w+b} pixeles');
    } else{
        console.log( Error)
    }
}
