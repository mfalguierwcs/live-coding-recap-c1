let cpt = 0
const intervalImage = setInterval(() => {
    if (cpt === dataSw.length) {
        cpt = 0;
    } else if (dataSw[cpt].vote_average < 7) {
        cpt++
    }
        
    imgArea.innerHTML = "";
    const urlImg = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2";
    const elementImg = document.createElement("img");
    elementImg.src = urlImg + dataSw[cpt].poster_path;
    imgArea.appendChild(elementImg);
    cpt++;
}, 3000)

swTtl.forEach((item) => {
    item.addEventListener("mouseover", (item) => {
        item.target.style.color = "pink";
    })
})