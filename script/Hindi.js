function HindiMovies() {
    const HindiDiv = document.getElementById("HindiDiv");
    fetch("https://hindi-6d5b1-default-rtdb.firebaseio.com/Hindi.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            console.log(jsondata);  //this time purely array of object mila

            jsondata.map((val) => {
                key = val.id;
                let HindiFigure = document.createElement('figure');
                HindiFigure.classList.add("HindiFigure");
               
                let HindiImg = document.createElement('img');
                HindiImg.src = `https://drive.google.com/uc?id=${val.id}`;
                HindiImg.alt = "HindiMovies";
                HindiImg.classList.add("cardimg");

                let  HindiFigCaption = document.createElement('figcaption');
                

                let figul = document.createElement('ul');
                figul.classList.add("stars")
                
                for (let i = 0; i < 5; i += 1) {
                    let figlist = document.createElement('li');
                    figlist.classList.add("star");

                   
                    let figicon = document.createElement('i')
                    figicon.classList.add("fa")
                    figicon.classList.add("fa-star")
                    figlist.appendChild( figicon );
                    
                    figul.appendChild( figlist )
                    
                }

                let HindiFigHeading = document.createElement('h1');
                let HindiFigText = document.createTextNode( val.heading );
                HindiFigHeading.appendChild( HindiFigText );

                let HindiFigParagraph = document.createElement('p');
                let HindiFigNode = document.createTextNode(val.paragraph);
                HindiFigParagraph.appendChild( HindiFigNode );

                let HindiFigAnchor = document.createElement('a');
                HindiFigAnchor.href = val.videosrc;
                HindiFigAnchor.classList.add("button");
                HindiFigAnchor.classList.add("play");
                HindiFigAnchor.textContent = "Watch Movie"
               


                HindiFigCaption.appendChild(figul);
                HindiFigCaption.appendChild( HindiFigHeading );
                HindiFigCaption.appendChild( HindiFigParagraph );
                HindiFigCaption.appendChild( HindiFigAnchor );
                HindiFigCaption.classList.add("FigureImage");


                HindiFigure.appendChild(  HindiImg );
                HindiFigure.appendChild( HindiFigCaption );

                
                HindiDiv.appendChild( HindiFigure );

            })
            const stars = document.querySelectorAll('.star');
           
            for (x = 0; x < stars.length; x++) {
                stars[x].starValue = (x + 1);
                ["click", "mouseover", "mouseout"].forEach(function (e) {
                    stars[x].addEventListener(e, showRating);
                })
            }

        })

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

