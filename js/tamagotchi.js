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

let instructions = "Let's play Tamagotchi! Keep your pet alive and happy by playing with and feeding it, and don't forget to let it rest. If it's Hunger, Sleepiness, or Boredom levels reach 100, your pet will die! Ready to begin?"
alert(instructions)

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
            alert(`${petName} has starved to death.`)
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
        alert(`${petName} has died of over exhaustion.`)
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
        alert(`${petName} has died of boredom.`)
    }
}

setInterval(getBored, 1000)


function feed() {
    // document.getElementById("taco").style.visibility = "visible"
    newPet.hunger -= 6
    document.getElementById("hungerLevel").innerHTML = newPet.hunger;
}


function bedtime() {
    // document.body.style.opacity = .2 // darkens page (night time)
    newPet.sleepiness -= 6
    document.getElementById("sleepLevel").innerHTML = newPet.sleep;
}



function play() {
    // document.getElementById("ball").style.visibility = "visible"
    newPet.bored -= 6
    document.getElementById("boredLevel").innerHTML = newPet.bored;
}


let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")


button1.addEventListener("click", feed)
button2.addEventListener("click", bedtime)
button3.addEventListener("click", play)


let ageInterval = setInterval(increaseAge, 10000)
function increaseAge() {
    if (newPet.hunger >= 100 || newPet.sleepiness >= 100 || newPet.boredom >= 100) {
        clearInterval(ageInterval)
    } else {
        newPet.age++;
        displayAge();
    }
}
    function displayAge() {
        let age = newPet.age;
        if (age === 1) {
            document.getElementById("age").innerHTML = petName + " is " + age + " year old";
        } else if(age % 5 === 0){
            document.getElementById("age").innerHTML = petName + " is " + age + " years old";
            alert(`It is time to evolve, click on your pet.`)
        } else {
            document.getElementById("age").innerHTML = petName + " is " + age + " years old";
        }
      }


let petEvolve = document.getElementsByClassName("ghosty")
let currWidth = petEvolve.clientWidth
let currHeight = petEvolve.clientHeight

// setInterval(evolve, 10000)

function evolve() {
        petEvolve.clientHeight = (currHeight + 50) + "px"
        petEvolve.clientWidth = (currWidth + 50) + "px"
    }

let evolveTime = document.querySelector(".ghosty")
evolveTime.addEventListener("click", evolve)

console.log(evolve)



function gameOver() {
    if(newPet.hunger >= 100 || newPet.sleepiness >= 100 || newPet.boredom >= 100) {
        document.location.replace("file:///Users/erica.reven/Desktop/seir-eustoma/projects/Tamagotchi-Project/gameOver.html")
        alert('Game Over')
    }
    
}

console.log(gameOver)


})
