 //Dichiaro una funzione
// function saluta(){


    // alert("Ciao dalla funzione");
// }

 //richiamo la funzione
 //saluta();



 //function getNome(){
  // prompt('Come ti chiami?');
 //}

//getNome();

//function scriviQualcosa(){
  //  document.write("Ciao dalla function scrivi qualcosa")
//}
//scriviQualcosa();

//function eseguiTutto(){
    //saluta();
    //scriviQualcosa();
    //getNome();
//}

//eseguiTutto();


function benvenuto(){
    //VARIABILI LOCALI
    var username= prompt('come ti chiami?');
    var mess= "ciao" + username + "benvenuto sulla pagina";
    var elDemo = document.getElementById('demo');
    elDemo.innerHTML = mess;
}
//benvenuto();
//richiameremo la funzione dalla pafina html
function scriviFeed(){
    var elFeed = document.getElementById('feedback');
    elFeed.innerHTML = '<p>Qui sotto potrai scriverer la tua recenisone</p>';
    elFeed.innerHTML +='<textarea rows=10></textarea>';
    elFeed.innerHTML += '<button onclick="salva()"> Invia Feed </button>';
}

function salva(){

    alert('Grazie per aver inviato il tuo feedback. Ciao');
}




function eseguiTutto(){
    benvenuto();
    scriviFeed();
}
// richiamo esegui tutto sul pulsante Html




