
fetch("https://film-124b7-default-rtdb.firebaseio.com/corousel.json")
  .then((apidata) => {
    return apidata.json()
  }).then((actualdata) => {

    const corouselcontainer = document.getElementById("corouselcontainer");
    actualdata.map((val) => {

      let slideElement = document.createElement('div');

      let imgNode = document.createElement('img');
      imgNode.src = val.src;
      imgNode.alt = val.alt;

      let contentNode = document.createElement('div');
      contentNode.classList.add('content');

      let headingNode = document.createElement('h1');
      let headingText = document.createTextNode(val.heading);
      headingNode.appendChild(headingText);


      let paragraphNode = document.createElement('p');
      let paraText = document.createTextNode(val.paragraph);
      paragraphNode.appendChild(paraText);

      let anchorNode = document.createElement('a');
      anchorNode.href = val.videosrc;
      anchorNode.title = "This is link";
      let anchorText = document.createTextNode("Watch now");
      anchorNode.appendChild(anchorText);

      contentNode.appendChild(headingNode);
      contentNode.appendChild(paragraphNode);
      contentNode.appendChild(anchorNode);


      slideElement.appendChild(imgNode);
      slideElement.appendChild(contentNode);
      slideElement.classList.add('slide');

      corouselcontainer.appendChild(slideElement);



    });

    let slideFirstEle = document.getElementsByClassName('slide')[0];
    slideFirstEle.classList.add("active");

    const btns = document.querySelectorAll(".nav-btn");

    var sliderNav = function (manual) {
      const slides = document.querySelectorAll('.slide');

      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      slides.forEach((slide) => {
        slide.classList.remove("active");

      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      
    }
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      })
    })

  })
  .catch((error) => {
    console.log(error);
  });


