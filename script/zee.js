function zee() {
    const zeediv = document.getElementById("zeediv");
    fetch("https://category-71b45-default-rtdb.firebaseio.com/zee.json")
        .then((apidata) => {
            return apidata.json();  //usko return karwana h taki usko further use kar shaku            
        })
        .then((jsondata) => {
            console.log(jsondata);  //this time purely array of object mila

            jsondata.map((val) => {
                key = val.id;
                let img = document.createElement('img');
                img.src = `https://drive.google.com/uc?id=${val.id}`;
                img.alt = "ZeeTv";
                zeediv.appendChild(img);

            })

        })

}
zee();
