
// 4 - STAP 5 - #1 manier - De containre div voor de ul en li movies
// const movieList = document.querySelector('#movieList');

// functie om ul en li te genereren 
// movieList.innerHTML = movies.map (function (movie) {
//     return '<li>' + movie.Title + '</li>';
// }).join('');

// 4 - STAP 5 - #2 manier - De bestaande UL als variabele
// const ul = document.querySelector('#movieList');
// de forEach met movie titels in browser
// movies.forEach ((movie) => {
// let li = document.createElement('li');
// l.appendChild(li);
// li.innerHTML += movie.Title;
// });

// 4 - STAP6 - IMG

// const ul = document.querySelector('#movieList');
// de forEach met movie img in browser
//movies.forEach (movie => {
//let img = document.createElement('img');
   // img. src = movie.Poster;
   // ul.appendChild(img);
   // img.innerHTML += movie.Poster;
//});
//OF
//movies.map(movie => {
   // let img = document.createElement("img");
    //img.src = movie.Poster;
   // img.innerHTML += movie.Poster;
   // return img;
  //}).forEach(img => {
  //  ul.appendChild(img);
  //})

// 6 - 7 - 8
const filmZoeker = document.querySelectorAll(".nav"); 

//filmZoeker.forEach(element => {element.addEventListener('change', event => {
 //   console.log("Event " + event.target.id);
//})});

// 9 - 10 
/*
filmZoeker.forEach(element => {element.addEventListener('change', event => {
   switch (event.target.value) {
       case "latest":
        console.log("hey ik ben een latest film");
           break;
        case "avengers":
        console.log("hey ik ben een Avengers film");
            break;
        case "x-man":
        console.log("hey ik ben een X-man film");
            break;
        case "princess":
        console.log("hey ik ben een Princess film");
            break;
        case "batman":
        console.log("hey ik ben een Batman film");
            break;
        default:
        console.log(`Sorry, deze films hebben we niet...`);
   }
})});
*/
// 11 - 12

// een functie met de array filter method gecombineerd... eerste stap parameter 
const filterMovies = (wordInMovieTitle) => {
    return movies.filter((movie) => movie.Title.includes(wordInMovieTitle))
} 
// bovenstaande lijst vast leggen in variabele!!!!!!
const batmanMovies = filterMovies ("Batman");
const xmenMovies = filterMovies ("X-Men");
const avengersMovies = filterMovies ("Avengers");
const princessMovies = filterMovies ("Princess");

// ul vast leggen
//const ul = document.querySelector('#movieList');

// de 'film-toevoeger' uit stap 4 is nu const. 
/*
const addMoviesToDom = (films) => {
    const ul = document.querySelector('#movieList');
  
    films.forEach (movie => {
        const img = document.createElement('img');
        img. src = movie.Poster
        ul.appendChild(img);
        img.innerHTML += movie.Poster;    
    });
}
*/
// je geeft met onderstaande zoektermen de waarde, argument voor de addMovieToDom.. de waarde die je hebt 
// vastgelegd n.a.v. de filter functie
// addMoviesToDom (batmanMovies);
// addMoviesToDom (xmenMovies);
// addMoviesToDom (avengersMovies);
// addMoviesToDom (princessMovies);

 // 13 
 
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

 // 14 filter nieuwste films vanaf 2014 filter

const filterMoviesLatest = movies.filter((movie) => {
    return movie.Year > 2013
}); 

// 15 while toegevoeg om eerste eerste alle 'oude' childs te verwijderen
// 16 alle filmlinks er in

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

// bonus zoekbalkje
// daar ga ik nog 3 weken over doen om het te fixen.... dus staat alleen in html css
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