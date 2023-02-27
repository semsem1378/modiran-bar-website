let homePageCards = [...document.querySelectorAll("div.coll> div.card")];
let roadCard = document.querySelector("div.roadCard");
let truckPic = [];
let callNow = document.querySelector("span.callNow");

for (const child of roadCard.children) {
    child.nodeName == "IMG" ? truckPic.push(child) : null;
}

let cardsIntCursor = 0;
let resume = true;
let timeInt = 4000;
let cardsInt = setInterval(() => {
    if (resume) {
        CardsInterval()
        cardsIntCursor++;
        if (cardsIntCursor > homePageCards.length - 1) {
            cardsIntCursor = 0;
        }
    }

}, timeInt);
CardsInterval();

function CardsInterval() {
    for (const card of homePageCards) {
        if (card.classList.contains("activeCard")) {
            card.classList.remove("activeCard");
        }
    }
    homePageCards[cardsIntCursor].classList.add("activeCard");
    selectedCard(cardsIntCursor);
}



function selectedCard(picNum) {
    for (const c of truckPic) {
        if (c.classList.contains("opcHide")) {
            c.classList.remove("opcHide");
        }
    }
    truckPic[picNum].classList.add("opcHide");
    textHandler(picNum);
}


function textHandler(textNum) {
    let title = document.querySelectorAll(".card-title")[textNum].textContent;
    // let txt = document.querySelectorAll(".card-text")[textNum].textContent;
    document.querySelector(".roadCard-title>h2").innerHTML = title;
    // document.querySelector(".roadCard-text>p").textContent = txt;
}

for (const card of homePageCards) {
    card.addEventListener("click", () => {
        cardsIntCursor = homePageCards.indexOf(card);
        CardsInterval();
        selectedCard(cardsIntCursor);
    })
    card.addEventListener("mouseenter", () => {
        resume = false;
        card.addEventListener("mouseleave", () => {
            resume = true;
        })
    })

}



let p = document.querySelector("p#callerP")
callNow.addEventListener("mouseenter",()=>{
    p.style.fontSize = "1.3rem";
    p.style.padding = "1rem";
})
callNow.addEventListener("mouseleave",()=>{
    p.style.fontSize = "0";
    p.style.padding = "0";
})







