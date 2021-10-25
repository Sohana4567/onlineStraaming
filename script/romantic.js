
function RomanticMovies() {
    const romanticdiv = document.getElementById("romanticdiv");
    fetch("https://discount-95a1c-default-rtdb.firebaseio.com/romantic.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            jsondata.map((val) => {
                key = val.id;
                let RomanticFigure = document.createElement('figure');
                RomanticFigure.classList.add("Imagefigure");
                
                let RomanticImg = document.createElement('img');
                RomanticImg.src = `https://drive.google.com/uc?id=${val.id}`;
                RomanticImg.alt= "RomanticMovies";
                RomanticImg.classList.add("cardimg");

                let RomanticFigCaption = document.createElement('figcaption');
               


                let RomanticFigHeading = document.createElement('h1');
                let RomanticFigText = document.createTextNode(val.heading);
                RomanticFigHeading.appendChild( RomanticFigText );

                let RomanticFigparagraph = document.createElement('p');
                let RomanticFigNode = document.createTextNode(val.paragraph);
                RomanticFigparagraph.appendChild( RomanticFigNode );

                let RomanticFigAnchor = document.createElement('a');
                RomanticFigAnchor.href = "#";
                RomanticFigAnchor.classList.add("button");
                RomanticFigAnchor.classList.add("play");
                RomanticFigAnchor.textContent = "Watch Movie"
                


                RomanticFigCaption.appendChild( RomanticFigHeading );
                RomanticFigCaption.appendChild( RomanticFigparagraph );
                RomanticFigCaption.appendChild( RomanticFigAnchor );
                RomanticFigCaption.classList.add("FigureImage");


                RomanticFigure.appendChild( RomanticImg );
                RomanticFigure.appendChild( RomanticFigCaption );

                romanticdiv.appendChild( RomanticFigure );

            })
        })

}

RomanticMovies();

