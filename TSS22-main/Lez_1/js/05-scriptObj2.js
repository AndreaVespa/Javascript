var auto = {
    marca: "",
    modello: "",
    cilindrata: 0,
    marcia: 0,
    velocita: 0,
    num_giri: 0,
    acceso: false,
    

    presentaMotore(marca, modello){
        this.marca = marca;
        this.modello = modello;
        console.log('Stai testando: ' + this.marca + ' - ' + this.modello);
    },

    modificaGiri: function(num_giri){
        this.num_giri = num_giri;
        console.log(this.num_giri + ' giri');
    },

    cambiaMarcia: function(marcia){
        this.marcia = marcia;
        console.log("Hai cambiato marcia !!");
        console.log("Sei alla marcia: " +  this.marcia);
    },

    calcolaVel : function(marca, modello, giri, marcia){
        this.presentaMotore(marca, modello);
        this.modificaGiri(giri);
        this.cambiaMarcia(marcia);
        this.velocita = (this.num_giri / (this.marcia * 100));
        console.log("La tua velocità è di : " + this.velocita);
    }
}


function valutaMotore(){
    auto.calcolaVel('marca', 'modello', 5000, 2);
    
}
