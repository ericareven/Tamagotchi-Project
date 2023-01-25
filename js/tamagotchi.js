document.addEventListener("DOMContentLoaded", function(){

class Tamagotchi {
    constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.bored = 0;
    this.age = 0; // initally
    // setInterval(() => {
    //     this.hunger +=2
    //     this.sleep +=2
    //     this.bored +=2
    //     hungerLevel.innerHTML = this.hunger
    //     sleepLevel.innerHTML = this.sleep
    //     boredLevel.innerHTML = this.bored
    // }, 2000)
    }
    getHunger(){
        setInterval(() => {
        this.hunger += 2
        }, 2000)
    }
    // getHungry (){
    //     for(let i = 0; i<=100; i++) {
    //         this.hunger +=2
    //         if(this.hunger === 50) {
    //             alert(``)
    //         }
    //     }
    // }
    // getSleepy () {
    //     // setInterval(() => {
    //     //     this.sleep +=2
    //     //     sleepLevel.innerHTML = this.sleep
    //     // }, 2000)
    //     this.sleep +=2
    //     sleepLevel.innerHTML = this.sleep
    //     if(this.sleepy === 50) {
    //         alert(`I'm getting sleepy`)
    //     } else if(this.sleepy === 80){
    //         alert(`YAWN! I'm getting very sleepy!`)
    //     } else if(this.sleepy === 90) {
    //         alert(`I NEED TO SLEEP!`)
    //     } else if(this.sleepy === 100) {
    //         document.body.style.backgroundColor = "black"
    //         alert(`Game Over`)
    //     }
    // }
    // // getBored() {
    // getSleepy()
    // // }
    // aging() {
    //     for(let i = 0; i<= 50; i++) {
    //         setInterval(this.age, 10000) // inc age every 10 seconds
    //     }
    //     return this.age
    // }
}

// console.log(getSleepy().setInterval(2000))

let instructions = ""

const petName = prompt(`What would you like to name your Tamagotchi pet?`).toUpperCase()
const newPet = new Tamagotchi(petName)
const nameId = document.querySelector('#name')
nameId.innerHTML = `${petName}`


newPet.getHunger()


function getHungry(e) {
    e.preventDefault()
    setInterval(()=> {
        document.getElementById("hungerLevel").innerHTML = newPet.hunger +=2
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
    }, 2000)
}

function getSleepy(e) {
    e.preventDefault()
    newPet.sleepiness +=2
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

function getBored(e) {
    e.preventDefault()
    newPet.bored +=2
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

// function start {
    
// //     prompt(instructions)
// // }
// document.getElementById("start-button").addEventListener("click", function() {
//     document.getElementById("start-button").style.display = "none";
//     document.getElementById("name-form").style.display = "block";
// });
// function createTamagotchi() {
//     let name = document.getElementById("name-input").value;
//     let tamagotchi = new Tamagotchi(name);
//     console.log(tamagotchi);
// } 

// document.getElementById("instructions-button").addEventListener("click", function() {
//     alert("instructions, but don't forget to actually type them")
//  })

// giveName = prompt("Please give your Tamagotchi a name", "")

hector = new Tamagotchi('Hector')

// function aging() {
//     for(let i = 0; i<= 50; i++) {
//         setInterval(this.age, 10000) // inc age every 10 seconds
//     }
//     return this.age
// }

// console.log(aging)

let start = Date.now(); // remember start time

function bedtime() {
    document.body.style.opacity = .2 // darkens page (night time)
    let timePassed = Date.now() - start;
    if (timePassed >= 3000) {
        clearInterval(bedtime); // finish the animation after 2 seconds
        return;
      }
}

function play() {
    document.getElementById("ball").style.visibility = "visible"
}
console.log(play)

// function feed() {
//     document.body.animate
// }

// function play() {
//     document.body.animate
// }

// let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
// let button3 = document.querySelector(".button3")

// button1.addEventListener("click", feed)
button2.addEventListener("click", bedtime)
// button3.addEventListener("click", play)



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

function decreaseHunger() {
    hungerLevel -= 10
    document.getElementById("hunger-bar").classList
}

})