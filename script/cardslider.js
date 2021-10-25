function BengaliMovie() {
    const centerdiv = document.getElementById("centerdiv");
    fetch("https://card-42e9a-default-rtdb.firebaseio.com/card.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            jsondata.map((val) => {
                key = val.id;
                videosrc = `https://drive.google.com/uc?id=${val.videoid}`;
                let BengaliFigure = document.createElement('figure');
                BengaliFigure.setAttribute('data-src', videosrc);
                BengaliFigure.classList.add("BengaliFigure");


                let BengaliImg = document.createElement('img');
                BengaliImg.src = `https://drive.google.com/uc?id=${val.id}`;
                BengaliImg.alt = "BengaliMovie";
                BengaliImg.classList.add("cardimg");

                let BengaliFigCaption = document.createElement('figcaption');


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

                let BengaliFigHeading = document.createElement('h1');
                let BengaliFigText = document.createTextNode(val.heading);
                BengaliFigHeading.appendChild(BengaliFigText);

                let BengaliFigParagraph = document.createElement('p');
                let BengaliFigNode = document.createTextNode(val.paragraph);
                BengaliFigParagraph.appendChild(BengaliFigNode);

                let BengaliFigAnchor = document.createElement('a');
                BengaliFigAnchor.classList.add("button");
                BengaliFigAnchor.classList.add("play");
                BengaliFigAnchor.textContent = "Watch Movie";


                BengaliFigCaption.appendChild(figul);
                BengaliFigCaption.appendChild(BengaliFigHeading);
                BengaliFigCaption.appendChild(BengaliFigParagraph);
                BengaliFigCaption.appendChild(BengaliFigAnchor);
                BengaliFigCaption.classList.add("FigureImage");


                BengaliFigure.appendChild(BengaliImg);
                BengaliFigure.appendChild(BengaliFigCaption);

                centerdiv.appendChild(BengaliFigure);

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
    html += `<video id="videoid" width="600" height="600" controls>
    <source src="${path}">
    </video>
    <button id="CloseButton" onclick="closeVideo()" > x </button>
    `
    videoid.innerHTML = html;
}
function closeVideo() {
    document.getElementById("videoid").style.display = 'none';
    document.getElementById('CloseButton').style.display = 'none'
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

BengaliMovie();


