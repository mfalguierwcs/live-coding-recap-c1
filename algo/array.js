// Retourner l'url d'un film en cherchant à partir de son nom exact (title),  
// s'aider de array.test.js

const findMovieUrlByTitle = (data, title) => {
    console.log(title)
    const movie = data.find((movie) => movie.title === title)
    return movie.poster_path;
}

module.exports = findMovieUrlByTitle
