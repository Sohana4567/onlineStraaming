let search = document.getElementById('searchbox');
search.addEventListener('keyup', ShowSearch);



function ShowSearch() {
  let input = search.value.toUpperCase();

  let BengaliFigure = document.getElementsByClassName('BengaliFigure');


  for (let i = 0; i < BengaliFigure.length; i++) {
    let CardTxt = BengaliFigure[i].getElementsByTagName('h1')[0];
    let CardValue = CardTxt.textContent || CardTxt.innerHTML;
    if (CardValue.toUpperCase().indexOf(input) > -1) {
      BengaliFigure[i].style.display = "block";
    } else {
      BengaliFigure[i].style.display = "none";
    }
  }

}
