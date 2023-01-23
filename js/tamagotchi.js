class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name;
    this.hunger = [1,2,3,4,5,6,7,8,9,10];
    this.sleepiness = [1,2,3,4,5,6,7,8,9,10];
    this.boredom = [1,2,3,4,5,6,7,8,9,10];
    this.age = 0 // initally
    }
}

giveName = prompt("Please give your Tamagotchi a name", "")


hector = new Tamagotchi('Hector')

function aging() {
    for(let i = 0; i<= 50; i++) {
        setInterval(this.age, 10000) // inc age every 10 seconds
    }
    return this.age
}

console.log(aging)

let start = Date.now(); // remember start time

function bedtime() {
    document.body.style.opacity = .2 // darkens page (night time)
    if (timePassed >= 3000) {
        clearInterval(bedtime); // finish the animation after 2 seconds
        return;
      }
}

function feed() {
    document.body.animate
}

function play() {

}

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")

button1.addEventListener("click", feed)
button2.addEventListener("click", bedtime)
button3.addEventListener("click", play)


// let start = Date.now(); // remember start time

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