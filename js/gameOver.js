document.addEventListener("DOMContentLoaded", function(){

function playAgain() {
    document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/Tamagotchi-Project/index.html");
}

let button = document.querySelector(".playAgain")

button.addEventListener("click", playAgain)

})