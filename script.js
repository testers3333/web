let hamburger = document.querySelector(".hamburger");
let header = document.querySelector(".header");
let a = /* document.querySelectorAll(".a") */ document.querySelectorAll(".acti");
let root = document.documentElement;
hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("enabled")) {
        hamburger.classList.remove("enabled");
        hamburger.classList.add("disabled");
        header.classList.remove("activated");
        for(ab of a) {
            ab.classList.remove("acti");
            ab.classList.add("a");
        }
        
        root.style.setProperty("--couleur-principale", "#43B581");
        root.style.setProperty("--couleur-secondaire", "#ed4147");
    } else {
        hamburger.classList.add("enabled");
        hamburger.classList.remove("disabled");
        header.classList.add("activated");
        for(ab of a) {
            ab.classList.add("acti");
            ab.classList.remove("a");
        }
        root.style.setProperty("--couleur-secondaire", "#43B581");
        root.style.setProperty("--couleur-principale", "#ed4147");
    };
});