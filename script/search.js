let search = document.getElementById('search-box');
search.addEventListener('keyup', showsearch);

function showsearch() {
  let input = search.value.toUpperCase();
 
  let figureImage = document.getElementsByClassName('Imagefigure');
  

  for (let i = 0; i < figureImage.length; i++) {
    let cardTxt = figureImage[i].getElementsByTagName('h1')[0];
    let cardValue = cardTxt.textContent || cardTxt.innerHTML;
    if (cardValue.toUpperCase().indexOf(input) > -1) {
      figureImage[i].style.display = "block";
    } else {
      figureImage[i].style.display = "none";
    }
  }

}