
function ActionMovies() {
    const Actiondiv = document.getElementById( "Actiondiv" );
    fetch("https://action-46aa9-default-rtdb.firebaseio.com/action/action.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
             

            jsondata.map((val) => {

                key = val.id;
                let figure = document.createElement('figure');
                figure.classList.add("Imagefigure");
               

                let img = document.createElement( 'img' );
                img.src = `https://drive.google.com/uc?id=${val.id}`;
                img.classList.add( "cardimg" );

                let figcaption = document.createElement( 'figcaption' );
               

                let figheading = document.createElement( 'h1' );
                let figtext = document.createTextNode( val.heading );
                figheading.appendChild( figtext );

                let figparagraph = document.createElement( 'p' );
                let figNode = document.createTextNode( val.paragraph );
                figparagraph.appendChild( figNode );

                let figanchor = document.createElement( 'a' );
                figanchor.href = "#";
                figanchor.classList.add("button");
                figanchor.classList.add("play");
                figanchor.textContent = "Watch Movie"
               

                figcaption.appendChild( figheading );
                figcaption.appendChild( figparagraph );
                figcaption.appendChild( figanchor );
                figcaption.classList.add( "figureImage" );


                figure.appendChild( img );
                figure.appendChild( figcaption );
                Actiondiv.appendChild( figure );

            })
        })
        .catch(( error ) => {
            console.log( error );
        });

}

ActionMovies();
