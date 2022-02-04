//notazione letterale


var studente ={
//definisco metodi e proprietà
nome:"andrea",
cognome:"vespa",
promosso: true,
matricola: 123,
dataNascita: new Date("11/13/1999").getFullYear(),

superaEsame: function(){
    alert('Hai superato l\'esame');
}

}
var docente ={
    nome:"Pippo",
    cognome:"baudo",
    dataNascita: new Date(01/01/1945),
    programmi:'sanremo',

    conduci: function(){
        alert('benvenuti cari studenti')
    }
}
var rettore={
    nome:"Piero",
    cognome:"angela",
    dataNascita: new Date('01/01/1933').getFullYear(),
    facolta : 'Super quark'
}

//recuperare ilvalore di alcune prop
console.log(studente.cognome);

var demo = document.getElementById('demo');

function stampaInfo(persona){

    demo.innerHTML='';

//     demo.innerHTML = persona.nome + '<br>';
//     demo.innerHTML += persona.cognome + '<br>';
//     demo.innerHTML += persona.matricola + '<br>';
//     demo.innerHTML += persona.dataNascita + '<br>';
//     demo.innerHTML += persona.promosso + '<br>';


// for in
for (const prop in persona) {
  console.log(persona[prop]);// uso la notazione parentesi quadre perchè prop è una strimga
  if (typeof persona[prop] !="function"){
      demo.innerHTML+= prop + " : " + persona[prop]+ '<br>';
      
  }
    }
}

 





