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

function bedtime(){
    document.body.style.background
}

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")

button1.addEventListener("click", )
button2.addEventListener("click", )
button3.addEventListener("click", )


// const button1 = document.querySelectorAll(".button1")
// for(let i = 0; i < buttons.length; i++){
//     button1[i].addEventListener('click', (e)=>{
//         e.preventDefault()
//         alert('You clicked a button!')
//     })
// }