function scadenza(){
    var settDaOggi , day, date, month, year, nomeGiorni,nomeMesi;

    settDaOggi= new Date(oggi.getTime() +(7*24*60*60*1000));
    nomeGiorni=['domenica', 'lunedi', 'martedi','mercoledi','giovedi','venerdi', 'sabato'];
    nomeMesi =['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno','luglio','settembre', 'ottobre', 'nov', 'dic'];
    day= nomeGiorni[settDaOggi.getDay()];
    date= settDaOggi.getDate();
    month= nomeMesi [settDaOggi.getMonth()];
    year = settDaOggi .getFullYear();
    var msg = " Le offerte scadranno il: ";
    msg += day +"("+ date +" "+ month +" "+ year +")";
    return msg;
}

var oggi= new Date();
var offertaFine=
offertaFine.innerHTML= scadenza(oggi);
