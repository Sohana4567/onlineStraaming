const ball = document.querySelector(".toggleball");
const items = document.querySelectorAll(".bodybg,.header,.heading");
ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle( "active" );
    })
    ball.classList.toggle( "active" );
})
