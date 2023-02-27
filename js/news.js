let deck = document.querySelector("div.card-deck");
let pos = { top: 0, left: 0, x: 0, y: 0 };
let leftHandler = document.querySelector("i.fa-chevron-left");
let rightHandler = document.querySelector("i.fa-chevron-right");
let allArticles = document.querySelectorAll("section.newsStand div.card");
let currentView = 0;

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: deck.scrollLeft,
        top: deck.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};


const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    deck.scrollTop = pos.top - dy;
    deck.scrollLeft = pos.left - dx;
};


const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    deck.style.cursor = 'grab';
    // deck.style.removeProperty('user-select');
};

const dircetionHandler = function (direct) {
    leftHandler.style.color = "inherit";
    rightHandler.style.color = "inherit";

    let sum = currentView + direct;
    if (sum >= 0 && sum < allArticles.length) {
        currentView = sum;
        allArticles[currentView].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }
    else {
        direct > 0 ? currentView == allArticles.length - 1 : currentView == 0;
        return (true);
    }
    setTimeout(() => {
        allArticles[currentView].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }, 600);
    console.log(currentView);
    return false;
}

deck.addEventListener("mousedown", mouseDownHandler);

leftHandler.addEventListener("click", () => {
    let color = dircetionHandler(1);
    color ? leftHandler.style.color = "red" : leftHandler.style.color = "inherit";
});
rightHandler.addEventListener("click", () => {
    let color = dircetionHandler(-1);
    color ? rightHandler.style.color = "red" : rightHandler.style.color = "inherit";

});

