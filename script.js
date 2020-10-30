// start Filmzoeker
const filmZoeker = document.querySelectorAll(".nav"); 

// een functie met de array filter method gecombineerd... eerste stap parameter 
const filterMovies = (wordInMovieTitle) => {
    return movies.filter((movie) => movie.Title.includes(wordInMovieTitle))
} 
// bovenstaande lijst vast leggen in variabelen!
const batmanMovies = filterMovies ("Batman");
const xmenMovies = filterMovies ("X-Men");
const avengersMovies = filterMovies ("Avengers");
const princessMovies = filterMovies ("Princess");

// je geeft met onderstaande zoektermen de waarde, argument voor de addMovieToDom.. de waarde die je hebt 
// vastgelegd n.a.v. de filter functie

 filmZoeker.forEach(element => {element.addEventListener('change', event => {
    switch (event.target.value) {
        case "latest":
         console.log("hey ik ben een latest film");
         addMoviesToDom (filterMoviesLatest);
            break;
         case "avengers":
         console.log("hey ik ben een Avengers film");
         addMoviesToDom (avengersMovies);
            break;
         case "x-men":
         console.log("hey ik ben een X-men film");
         addMoviesToDom (xmenMovies);
             break;
         case "princess":
         console.log("hey ik ben een Princess film");
         addMoviesToDom (princessMovies);
             break;
         case "batman":
         console.log("hey ik ben een Batman film");
         addMoviesToDom (batmanMovies)
             break;
         default:
         console.log(`Sorry, deze films hebben we niet...`);
    }
 })});

 // filter nieuwste films vanaf 2014 filter

const filterMoviesLatest = movies.filter((movie) => {
    return movie.Year > 2013
}); 

// while toegevoegen om eerste eerste alle 'oude' childs te verwijderen

const addMoviesToDom = (films) => {
    const ul = document.querySelector('#movieList');
    while (ul.firstChild) { 
        ul.removeChild(ul.firstChild);}
    films.forEach (movie => {
        const imdbLink = document.createElement('a');
        const img = document.createElement('img');
        imdbLink.target = "_blank";
        imdbLink.href = "https://www.imdb.com/title/" + movie.imdbID;
        img. src = movie.Poster
        img.innerHTML += movie.Poster;
        ul.appendChild(imdbLink).appendChild(img);
    });
    
}
// UPDATE deze was in eerste poging om opdracht te doen slagen weg gevallen.... dit is startpunt van filmzoeker.
addMoviesToDom (movies);

// bonus zoekbalkje
// Staat alleen in css html... maar ga er nog later verder mee puzzelen n.a.v. feedback
/*
const searchBox = document.querySelector (".search");
const searchInput = document.querySelector ("#input");
searchInput.addEventListener ("keyup", function (item) {
    const searchItem = item.target.value.toUpperCase();
    movies.forEach (function (e) {
        console.log (e.Title);
    })
})
*/