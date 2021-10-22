function product() {
    const centerdiv = document.getElementById("centerdiv");
    fetch("https://card-42e9a-default-rtdb.firebaseio.com/card.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            jsondata.map((val) => {
                key = val.id;
                videosrc = `https://drive.google.com/uc?id=${val.videoid}`;
                let figure = document.createElement('figure');
                figure.setAttribute('data-src', videosrc);
                figure.classList.add("Imagefigure");


                let img = document.createElement('img');
                img.src = `https://drive.google.com/uc?id=${val.id}`;
                img.classList.add("cardimg");

                let figcaption = document.createElement('figcaption');


                let figul = document.createElement('ul');
                figul.classList.add("stars")
                for (let i = 0; i < 5; i += 1) {
                    let figlist = document.createElement('li');
                    figlist.classList.add("star");
                    let figicon = document.createElement('i');
                    figicon.classList.add("fa");
                    figicon.classList.add("fa-star");
                    figlist.appendChild(figicon);
                    figul.appendChild(figlist);
                }

                let figheading = document.createElement('h1');
                let figtext = document.createTextNode(val.heading);
                figheading.appendChild(figtext);

                let figparagraph = document.createElement('p');
                let figNode = document.createTextNode(val.paragraph);
                figparagraph.appendChild(figNode);

                let figanchor = document.createElement('a');
                figanchor.classList.add("button");
                figanchor.classList.add("play");
                figanchor.textContent = "Watch Movie";


                figcaption.appendChild(figul);
                figcaption.appendChild(figheading);
                figcaption.appendChild(figparagraph);
                figcaption.appendChild(figanchor);
                figcaption.classList.add("figureImage");


                figure.appendChild(img);
                figure.appendChild(figcaption);

                centerdiv.appendChild(figure);

                var x = document.getElementById('centerdiv').querySelectorAll('.play');
                x.forEach((ele) => {
                    ele.onclick = (evnt) => {
                        var srcPath = evnt.target.parentNode.parentNode.dataset.src;
                        getMovie(srcPath);
                    }
                })

            })

            const stars = document.querySelectorAll('.star');
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

function getMovie(path) {
    let videoid = document.getElementById("videodiv");
    let html = "";
    html += `<video width="600" height="600" controls>
    <source src="${path}">
    </video>`
    videoid.innerHTML = html;
}


function showRating(e) {
    let type = e.type;
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

product();


