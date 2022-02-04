var numIniziale = 14.5214578;
var numToFix = numIniziale.toFixed(3); // il numero cifre decimaali dopo la virgola
var numToPre= numIniziale.toPrecision(3); // il numero di cifre significative


console.log(numIniziale);
console.log(numToFix);
console.log(numToPre);
//oggetto number 
var x1="132";
var x2= true;
var x3= false;
var x4 = new Date();
var x5= "123 456";



console.log(Number(x1));
console.log(Number(x2));
console.log(Number(x3));
console.log(Number(x4));
console.log(Number(x5));




var n1= parseInt("10");
var n2= parseInt("22.33");
var n3 = parseInt ("                  33             ");
var n4 =parseInt("20Ciao");
var n5 = parseInt("caio20");
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);



var n7 = parseInt('10101010000010', 2);
console.log(n7);
var n8=  parseFloat('13.78');
var n9= parseFloat(45);
console.log(n8);
console.log(n9);

/////////// isNaN permette di capire se è un numero o no
var nan= "ciao";
var num= 44;
console.log(isNan(nan));
console.log(isNan(num));


// funzione eval
var p1= 4;
var p2=5;
var e1 =eval('p1*p2');
var e2 = eval (p1 +p2);