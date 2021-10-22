function HindiMovies() {
    const Englishdiv = document.getElementById("Englishdiv");
    fetch("https://english-23010-default-rtdb.firebaseio.com/English.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            console.log(jsondata);  //this time purely array of object mila

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

                let figul = document.createElement('ul');
                figul.classList.add("stars")
                console.log(figul)
                for (let i = 0; i < 5; i += 1) {
                    let figlist = document.createElement('li');
                    figlist.classList.add("star");

                    console.log(figlist)
                    let figicon = document.createElement('i')
                    figicon.classList.add("fa")
                    figicon.classList.add("fa-star")
                    figlist.appendChild(figicon);
                    console.log(figlist)
                    figul.appendChild(figlist)
                    console.log(figul)
                }

                let figheading = document.createElement('h1');
                let figtext = document.createTextNode(val.heading);
                figheading.appendChild(figtext);

                let figparagraph = document.createElement('p');
                let figNode = document.createTextNode(val.paragraph);
                figparagraph.appendChild(figNode);

                let figanchor = document.createElement('a');
                figanchor.href = val.videosrc;
                figanchor.classList.add("button");
                figanchor.classList.add("play");
                figanchor.textContent = "Watch Movie"
                console.log(figanchor)


                figcaption.appendChild(figul);
                figcaption.appendChild(figheading);
                figcaption.appendChild(figparagraph);
                figcaption.appendChild(figanchor);
                figcaption.classList.add("figureImage");


                figure.appendChild(img);
                figure.appendChild(figcaption);
                Englishdiv.appendChild(figure);

            })
            const stars = document.querySelectorAll('.star');
            console.log(stars)
            for (x = 0; x < stars.length; x++) {
                stars[x].starValue = (x + 1);
                ["click", "mouseover", "mouseout"].forEach(function (e) {
                    stars[x].addEventListener(e, showRating);
                })
            }

        })
        .catch((error) => {
            console.log(error);
        });

}


function showRating(e) {
    let type = e.type;
    // console.log(type)
    const stars = document.querySelectorAll('.star');
    let starVal = this.starValue;
    stars.forEach(function (elem, ind) {
        if (type == 'click') {
            if (ind <= starVal) {
                elem.classList.add("orange");
            } else {
                elem.classList.remove("orange");
            }
        }
        if (type == 'mouseover') {
            if (ind < starVal) {
                elem.classList.add("yellow");
            } else {
                elem.classList.remove("yellow");
            }
            if (type == 'mouseout') {
                elem.classList.remove("yellow");
            }
        }
    })
}

HindiMovies();

