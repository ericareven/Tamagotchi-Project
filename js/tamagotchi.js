document.addEventListener("DOMContentLoaded", function(){

class Tamagotchi {
    constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.bored = 0;
    this.age = 0; // initally
    }
}


// let instructions = ""

const petName = prompt(`What would you like to name your Tamagotchi pet?`).toUpperCase()
const newPet = new Tamagotchi(petName)
const nameId = document.querySelector('#name')
nameId.innerHTML = `${petName}`


function getHungry() {
    newPet.hunger +=2
    document.getElementById("hungerLevel").innerHTML = newPet.hunger;
        if(newPet.hunger === 50) {
            alert(`Is it snack time yet?`)
        } else if(newPet.hunger === 80){
            alert(`I haven't eaten in forever!!`)
        } else if(newPet.hunger === 90) {
            alert(`I'm starving!!'`)
        } else if(newPet.hunger === 100) {
            document.body.style.backgroundColor = "black"
            alert(`Game Over`)
        }
    }

setInterval(getHungry, 1000)

function getSleepy() {
    newPet.sleepiness +=2
    document.getElementById("sleepLevel").innerHTML = newPet.sleepiness;
    if(newPet.sleepiness === 50) {
        alert(`Is it nap time yet?`)
    } else if(newPet.sleepiness === 80){
        alert(`YAWN! I am so sleepy.`)
    } else if(newPet.sleepiness === 90) {
        alert(`I need sleep!!`)
    } else if(newPet.sleepiness === 100) {
        document.body.style.backgroundColor = "black"
        alert(`Game Over`)
    }
}

setInterval(getSleepy, 1000)

function getBored() {
    newPet.bored +=2
    document.getElementById("boredLevel").innerHTML = newPet.bored;
    if(newPet.bored === 50) {
        alert(`Can you play with me? I'm bored.`)
    } else if(newPet.bored === 80){
        alert(`Ughh I have never been so bored in my life!`)
    } else if(newPet.bored === 90) {
        alert(`I'm so bored I could literally die!`)
    } else if(newPet.bored === 100) {
        document.body.style.backgroundColor = "black"
        alert(`Game Over`)
    }
}

setInterval(getBored, 1000)

function feed() {
    // document.body.style.opacity = .2 // darkens page (night time)
    newPet.hunger -= 5
    document.getElementById("hungerLevel").innerHTML = newPet.hunger;
}


function bedtime() {
    // document.body.style.opacity = .2 // darkens page (night time)
    newPet.sleepiness -= 5
    document.getElementById("sleepLevel").innerHTML = newPet.sleep;
}



function play() {
    // document.body.style.opacity = .2 // darkens page (night time)
    newPet.bored -= 5
    document.getElementById("boredLevel").innerHTML = newPet.bored;
}
// function play() {
//     document.getElementById("ball").style.visibility = "visible"
// }


let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")


button1.addEventListener("click", feed)
button2.addEventListener("click", bedtime)
button3.addEventListener("click", play)




// let start = Date.now(); // remember start time
/*
let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}


*/

// const button1 = document.querySelectorAll(".button1")
// for(let i = 0; i < buttons.length; i++){
//     button1[i].addEventListener('click', (e)=>{
//         e.preventDefault()
//         alert('You clicked a button!')
//     })
// }

// (document).ready(function() {
//     var width = (document).width();
//     function appear() {
//         document.images.style.appear = "appear"
//     }
//     function goRight() {
//         (".taco").animate({
//         left: width
//       }, 5000, function() {
//          setTimeout(goLeft, 50);
//       });
//     }
//     function goLeft() {
//         (".taco").animate({
//         left: 0
//       }, 5000, function() {
//          setTimeout(goRight, 50);
//       });
//     }

//     setTimeout(goRight, 50);
// });

})
