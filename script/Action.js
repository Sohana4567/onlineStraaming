function ActionMovies() {
    const ActionDiv = document.getElementById( "ActionDiv" );
    fetch("https://action-46aa9-default-rtdb.firebaseio.com/action/action.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
             

            jsondata.map((val) => {

                key = val.id;
                let ActionFigure = document.createElement('figure');
                ActionFigure.classList.add("ActionFigure");
               

                let ActionImg = document.createElement( 'img' );
                ActionImg.src = `https://drive.google.com/uc?id=${val.id}`;
                ActionImg.alt = "ActionMovies"
                ActionImg.classList.add( "cardimg" );

                let ActionFigcaption = document.createElement( 'figcaption' );
               

                let ActionFigHeading = document.createElement( 'h1' );
                let ActionFigText = document.createTextNode( val.heading );
                ActionFigHeading.appendChild( ActionFigText );

                let ActionFigParagraph = document.createElement( 'p' );
                let ActionFigNode = document.createTextNode( val.paragraph );
                ActionFigParagraph.appendChild( ActionFigNode );

                let ActionFigAnchor = document.createElement( 'a' );
                ActionFigAnchor.href = "#";
                ActionFigAnchor.classList.add("button");
                ActionFigAnchor.classList.add("play");
                ActionFigAnchor.textContent = "Watch Movie"
               

                ActionFigcaption.appendChild( ActionFigHeading );
                ActionFigcaption.appendChild( ActionFigParagraph );
                ActionFigcaption.appendChild( ActionFigAnchor );
                ActionFigcaption.classList.add( "FigureImage" );


                ActionFigure.appendChild( ActionImg );
                ActionFigure.appendChild( ActionFigcaption );
                ActionDiv.appendChild( ActionFigure );

            })
        })
        .catch(( error ) => {
            console.log( error );
        });

}

ActionMovies();


