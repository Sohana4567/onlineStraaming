let navbar = document.querySelector('.navbar');
document.querySelector('#menubtn').onclick = () => {
    navbar.classList.toggle( 'active' );
    searchform.classList.remove( 'active' );
}

let searchform = document.querySelector('.searchform');
document.querySelector('#searchbtn').onclick = () => {
    searchform.classList.toggle( 'active' );
   // navbar.classList.remove( 'active' );
}

window.onscroll = () => {
    //navbar.classList.remove( 'active' );
    searchform.classList.remove( 'active' );
}
