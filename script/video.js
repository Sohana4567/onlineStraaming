
fetch("https://film-124b7-default-rtdb.firebaseio.com/corousel.json")
  .then((apidata) => {
    return apidata.json()
  }).then((actualdata) => {

    const videodiv=document.getElementsByClassName("video_div");
    actualdata.map((val) => {
       let key=val[0]
      let slideElement = document.createElement('div');

      let imgNode = document.createElement('img');
      imgNode.src = key.src;
      imgNode.alt = key.alt;

      let contentNode = document.createElement('div');
      contentNode.classList.add('content');

      let headingNode = document.createElement('h1');
      let headingText = document.createTextNode(key.heading);
      headingNode.appendChild(headingText);


      let paragraphNode = document.createElement('p');
      let paraText = document.createTextNode(key.paragraph);
      paragraphNode.appendChild(paraText);

      let anchorNode = document.createElement('a');
      anchorNode.href = "#";
      anchorNode.title = "This is link";
      let anchorText = document.createTextNode("Watch now");
      anchorNode.appendChild(anchorText);

      contentNode.appendChild(headingNode);

      contentNode.appendChild(paragraphNode);
      contentNode.appendChild(anchorNode);


      slideElement.appendChild(imgNode);
      slideElement.appendChild(contentNode);
      slideElement.classList.add('slide');

      videodiv.appendChild(slideElement);



    });

  })
  .catch((error) => {
    console.log(error);
  });


