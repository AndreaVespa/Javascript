var films = [
    {
        titolo: "El Camino",
        durata: 122,
        anno: 2019,
        locandina: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
        genere: "Drammatico",
        cast: ["Aaron Paul", "Joonathan", "Matt Jones"]
    },
    {
        titolo: "Avatar",
        durata: 162,
        anno: 2009,
        locandina: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        genere: "Fantascienza",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver","Stephen Lang"]
    },
    {
        titolo: "Interstellar",
        durata: 169,
        anno: 2012,
        locandina: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        genere: "Fantascienza",
        cast: ["Ellen Burstyn", "Matthew McConaughey", "Mackenzie Foy", "John Lithgow"]
    },
    {
        titolo: "Iron Man",
        durata: 126,
        anno: 2008,
        locandina: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
        genere: "Azione",
        cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"]
    },
    {
        titolo: "Il Signore Degli Anelli",
        durata: 178,
        anno: 2001,
        locandina: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        genere: "Fantasy",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
    },
]

var titolo = document.getElementById("titolo");
var durata = document.getElementById("durata");
var anno = document.getElementById("anno");
var locandina = document.getElementById("locandina");
var cast = document.getElementById("cast");
var genere = document.getElementById("genere");

var counter=0;

function mostraLo(indice){
locandina.setAttribute("src", films[counter].locandina);
titolo.innerHTML=films[counter].titolo
anno.innerHTML=films[counter].anno
genere.innerHTML= films[counter].genere
durata.innerHTML= films[counter].durata
cast.innerHTML= films[counter].cast


}

function next(){
    
    counter++;
    
    
    if(counter>4){
        counter=0
    }
    mostraLo(counter)


}

function prev(){
    counter--;
    if(counter<0 ){
        counter = 5
    }
    mostraLo(counter)
    
    
}
mostraLo(0)

// prendere un Obj scritto in JS e trasformare in notazione JSON
var mioJson = JSON.stringify(films[0])
console.log(mioJson);

// prendo un obj formato JSON, lo trasformo in un oggetto JS
var filmJSON = '{"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","Rated":"PG-13","Released":"19 Dec 2001","Runtime":"178 min","Genre":"Action, Adventure, Drama","Director":"Peter Jackson","Writer":"J.R.R. Tolkien, Fran Walsh, Philippa Boyens","Actors":"Elijah Wood, Ian McKellen, Orlando Bloom","Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","Language":"English, Sindarin","Country":"New Zealand, United States","Awards":"Won 4 Oscars. 121 wins & 126 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.8","imdbVotes":"1,767,565","imdbID":"tt0120737","Type":"movie","DVD":"06 Aug 2002","BoxOffice":"$315,710,750","Production":"N/A","Website":"N/A","Response":"True"}'
var mioOBJ = JSON.parse(filmJSON);
console.log(mioOBJ);