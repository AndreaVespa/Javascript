var moto = new Object();

// utilizzo la notazione . per assegnare il valore alla prop
moto.marca ="Kawasaki";
moto.modello ="Z750";
moto.cilindrata= 750;
moto.marcia = 6;

moto.cambiaMarcia= function(marcia){
    this.marcia= marcia;
}
 

// notazione con costruttore
function Studente(nome, cognome, matricola ,anno){
 this.nome= nome;
 this.cognome = cognome;
 this.matricola= matricola;
 this.anno= anno;
 
 this.presentati = function(){
     var desc = " Lo sTUDENTE " + this.nome + " "+ this.cognome;
     desc +=" è nato mel " + this.anno;
     desc+=" La sua matricola è : "+ this.matricola;
     return desc;

    }
}
var studenti =[
    new Studente("fabio", "amoruso", 2, 1996),
    new Studente("christian", "De la fuente", 3, 1999),
    new Studente("aurora", "esposito", 4, 1998),
    new Studente("matteo", "gamba", 5, 1993),
    new Studente("giuseppe", "garone", 6, 1995),
];
 for(var s  in studenti){
     console.log(studenti[s].presentati());
 }
for (let index = 0; index < studenti.length; index++) {
   console.log(studenti[index].presentati());
}

var studA={
    nome:"Aurora",
    cognome: "Esposito",anno: 1998,
    matricola:4,
}

var studAJSON='{"nome":"Aurora", "cognome": "Esposito","anno":"1998", "matricola":"4"}';
console.log(studA);
 var studAOBj = JSON.parse(studAJSON);
 console.log(studAOBj);
 var studJSON2= JSON.stringify(studAOBj);
 console.log(studJSON2);



























 

