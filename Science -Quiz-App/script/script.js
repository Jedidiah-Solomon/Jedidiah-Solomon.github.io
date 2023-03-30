//----------------Pre-loader starts-----------------------//
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

//----------------Pre-loader ends-------------------------//