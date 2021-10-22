
function RomanticMovies() {
    const romanticdiv = document.getElementById("romanticdiv");
    fetch("https://discount-95a1c-default-rtdb.firebaseio.com/romantic.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            jsondata.map((val) => {
                key = val.id;
                let figure = document.createElement('figure');
                figure.classList.add("Imagefigure");
                console.log(figure);
                let img = document.createElement('img');
                img.src = `https://drive.google.com/uc?id=${val.id}`;
                img.classList.add("cardimg");

                let figcaption = document.createElement('figcaption');
                console.log(figcaption)


                let figheading = document.createElement('h1');
                let figtext = document.createTextNode(val.heading);
                figheading.appendChild(figtext);

                let figparagraph = document.createElement('p');
                let figNode = document.createTextNode(val.paragraph);
                figparagraph.appendChild(figNode);

                let figanchor = document.createElement('a');
                figanchor.href = "video.html";
                figanchor.classList.add("button");
                figanchor.classList.add("play");
                figanchor.textContent = "Watch Movie"
                console.log(figanchor)


                figcaption.appendChild(figheading);
                figcaption.appendChild(figparagraph);
                figcaption.appendChild(figanchor);
                figcaption.classList.add("figureImage");


                figure.appendChild(img);
                figure.appendChild(figcaption);

                romanticdiv.appendChild(figure);

            })
        })

}

RomanticMovies();

