var demo = document.getElementById('demo');

function saluta(username){
    var username = document.getElementById('username').value;// prendo cio che l'utente scrive

if( username== ""){
 
    demo.innerHTML ="Non hai compilato il campo"
    demo.style = "color: red";

}else{

    
    
    
    console.log("Ti chiami" + username);
    demo.innerHTML = "ciao" + username;
    demo.style="color: black";
}
    document.getElementById('username').value="";

}
    
        





