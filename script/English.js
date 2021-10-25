function  EnglishMovies() {
    const EnglishDiv = document.getElementById("EnglishDiv");
    fetch("https://english-23010-default-rtdb.firebaseio.com/English.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            console.log(jsondata);  //this time purely array of object mila

            jsondata.map((val) => {
                key = val.id;
                let EnglishFigure = document.createElement('figure');
                EnglishFigure.classList.add("EnglishFigure");
               
                let EnglishImg = document.createElement('img');
                EnglishImg.src = `https://drive.google.com/uc?id=${val.id}`;
                EnglishImg.alt="EnglishMovies";
                EnglishImg.classList.add("cardimg");

                let EnglishFigCaption = document.createElement('figcaption');
                
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

                let EnglishFigHeading = document.createElement('h1');
                let EnglishFigText = document.createTextNode(val.heading);
                EnglishFigHeading.appendChild( EnglishFigText );

                let EnglishFigParagraph = document.createElement('p');
                let EnglishFigNode = document.createTextNode(val.paragraph);
                EnglishFigParagraph.appendChild( EnglishFigNode );

                let EnglishFigAnchor = document.createElement('a');
                EnglishFigAnchor.href = val.videosrc;
                EnglishFigAnchor.classList.add("button");
                EnglishFigAnchor.classList.add("play");
                EnglishFigAnchor.textContent = "Watch Movie"
               


                EnglishFigCaption.appendChild( figul );
                EnglishFigCaption.appendChild( EnglishFigHeading );
                EnglishFigCaption.appendChild( EnglishFigParagraph );
                EnglishFigCaption.appendChild( EnglishFigAnchor );
                EnglishFigCaption.classList.add("FigureImage");


                EnglishFigure.appendChild( EnglishImg );
                EnglishFigure.appendChild( EnglishFigCaption );
                EnglishDiv.appendChild( EnglishFigure );

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

EnglishMovies();

