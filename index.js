const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const newGame= document.querySelector(".btn-newGame")
const startGame = document.querySelector(".btn-startGame")
const showTime = document.querySelector(".time")
const quarter = document.querySelector(".quarter")


let scores = {
  home: 0,
  guest: 0
}

let seconds=0
let minutes =0
let intervalId

function addPoints(team, num) {
  scores[team] += num

  homeScore.innerHTML = scores.home
  guestScore. innerHTML= scores.guest  
}

startGame.addEventListener("click", function () {
    
    if(intervalId){
        return 
    }
   intervalId = setInterval(function () {
      seconds++
      if (seconds === 60){
        minutes++
        seconds = 0
      }
     showTime.innerHTML =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")

     if (minutes === 45){
        clearInterval(intervalId)
        intervalId = null
     }

    if (minutes < 12){
       quarter.innerHTML = "Quarter 1"
    }else if (minutes < 24){
        quarter.innerHTML = "Quarter 2"
    }else if (minutes < 36){
        quarter.innerHTML = "Quarter 3"
    }else if (minutes < 48){
    quarter.innerHTML = "Quarter 4"
    }else{
    quarter.innerHTML = "Game Over"
}
}, 1000)
 })

newGame.addEventListener ("click" , function (){
   scores.home = 0
   scores.guest = 0
   seconds=0
   minutes =0
   clearInterval(intervalId)
   intervalId = null
   homeScore.innerHTML = scores.home
   guestScore. innerHTML= scores.guest 
   showTime.innerHTML = "00:00"
}
)



    
  
