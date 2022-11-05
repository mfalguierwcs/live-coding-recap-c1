// js dom 1 - debuger le live coding help

const wilders = [
    "Guillaume",
    "Margaux",
    "Marion",
    "Danyel",
    "Alban",
    "Bertrand",
    "Samy",
    "Elodie",
    "Damien",
    "David",
    "JB",
    "Denis",
    "Vincent",
    "Nadège",
    "Nicolas",
    "Julien"
]

// j'écris mes sélecteurs
const help = document.getElementById("help");
const helpPerson = document.getElementById("personHelp");

// je transforme ma fonction avec la synthaxe es6
function helpLiveCoding() {
    const randomWilder = Math.round(Math.random() * (wilders.length - 1));
    const wilder = wilders[randomWilder];
    helpPerson.innerText = wilder;
}

// comment écrit-on un listener qui appelle ma fonction ?
help.addEventListener("click", () => {
    helpLiveCoding();
})



// js dom 2 - génerateur de bons films star wars
const imgArea = document.querySelector("#imageArea")

const dataSw = [{
    poster_path: "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    vote_average: 8.2,
    title: "Star Wars"
}, {
    poster_path: "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/tEQlCGiiWvMvfD7Sz8d99Pouy39.jpg",
    vote_average: 8.5,
    title: "Star Wars: The return of jedi"
}, {
    title: "Star Wars: The Last Jedi",
    vote_average: 6.9,
    poster_path: "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
},
{
    title: "Star Wars: The Force Awakens",
    vote_average: 7.3,
    poster_path: "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
},
{
    title: "Rogue One: A Star Wars Story",
    vote_average: 7.5,
    poster_path: "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
}]

const generatePictures = () => {
    let cpt = 0;
    const img = document.createElement("img");
    img.src = dataSw[cpt].poster_path;
    imgArea.appendChild(img);
    
    setInterval(() => {
        if (cpt < dataSw.length - 1) {
            cpt++
        } else {
            cpt = 0
        }

        const film = dataSw[cpt];
        img.src = film.poster_path;
            
    }, 3000)
    
}

generatePictures();








// js dom 3 - multiple selector
const swTtl = document.querySelectorAll(".sw-ttl");

swTtl.forEach((elementTtl) => {
    elementTtl.addEventListener("mouseover", () => {
        elementTtl.style.color = "red";
    })
})

