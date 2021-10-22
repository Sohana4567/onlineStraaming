function starplus() {
    const stardiv = document.getElementById("stardiv");
    fetch("https://starplus-4a752-default-rtdb.firebaseio.com/starplus.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {    
                  
            jsondata.map((val) => {
                key = val.id;
                let img = document.createElement( 'img' );
                img.src = `https://drive.google.com/uc?id=${val.id}`;
                stardiv.appendChild(img);

            })

        })
        .catch((error) => {
            console.log(error);
        });

}
starplus();