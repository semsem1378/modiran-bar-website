let drawer_nav = document.querySelector("div.drawer_nav");
let burgerBtn = document.querySelector("#burgerBtn");
drawer_nav.classList.add("overflow");


function nav_handler() {
    drawer_nav.classList.contains("overflow") ? drawer_nav.classList.remove("overflow") : drawer_nav.classList.add("overflow");
    drawer_nav.classList.contains("drawDown") ? drawer_nav.classList.remove("drawDown") : drawer_nav.classList.add("drawDown");
}


burgerBtn.addEventListener("click", () => {
    nav_handler();
})
window.addEventListener("click", (e) => {
    if (drawer_nav.classList.contains("drawDown")) {
        if (e.target != burgerBtn) {
            drawer_nav.classList.remove("drawDown");
            drawer_nav.classList.add("overflow");
        }
    }
})