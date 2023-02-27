let iconNum = [...document.querySelectorAll("div.iconNum")];
let progressBar = document.querySelectorAll("div.progressBar");
let itemInfo = document.querySelectorAll("div.itemInfo");
let images = document.querySelectorAll(".howToOrder-images>img");

let iconIndex = 0;
let pause = false;
changeIcon(iconIndex);
let iconCarousel = setInterval(() => {
    if (!pause) {
        iconIndex < iconNum.length - 1 ? iconIndex++ : iconIndex = 0;
        changeIcon(iconIndex);
    }
}, 4500);



function changeIcon(i) {
    for (const icon of iconNum) {
        if (icon.classList.contains("selected-icon")) {
            icon.classList.remove("selected-icon");
        }
    }
    for (const pbar of progressBar) {
        pbar.style.width = "0";
    }
    for (const item of itemInfo) {
        item.style.opacity = "0.5";
    }
    itemInfo[iconIndex].style.opacity = "1";
    progressBar[i].style.width = "80%";
    iconNum[i].classList.add("selected-icon");
    for (const img of images) {
        img.classList.contains("show") ? img.classList.remove("show") : null;
    }
    images[iconIndex].classList.add("show");
}



for (const icon of iconNum) {
    icon.addEventListener("click", () => {
        iconIndex = iconNum.indexOf(icon);
        changeIcon(iconIndex);
    })
    icon.addEventListener("mouseenter", () => {
        pause = true;
    })
    icon.addEventListener("mouseleave", () => {
        pause = false;
    })
}