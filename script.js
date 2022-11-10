let dino = document.getElementById("dino")
let block = document.getElementById("block")
let speed = 2

let score = 0
let hasGottenScore = false
let playing = true

function jump(){
    if (dino.classList != "jumping"){
        dino.classList.add("jumping")
        setTimeout(jumpstop, 650)
    }
}

function jumpstop(){
    dino.classList.remove("jumping")
}

setInterval(check,10)
let localHighscore = localStorage.getItem("hs")
function check(){
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"))
    
    if (dinoTop>=150 && blockLeft<=75 && dinoLeft>=25) {
        block.style.display= "none"
        block.style.animation = "none"
        playing=false
        if(score>localHighscore){
            localStorage.setItem("hs",score)
            localHighscore=localStorage.getItem("hs")
        }



        document.body.innerHTML = "DU TAPTE BRODER, SCORE:  " + score + "<br> DIN PERSONLIGE HIGHSCORE: "+localHighscore
    }else if(blockLeft<=75 && dinoLeft>=25 && !hasGottenScore){
        score +=1
        hasGottenScore=true
        setTimeout(allowScore, 300)
    }

    document.getElementById("score").innerHTML = score
    if (speed>0.5){
        speed -= 0.0002
    }
    
    
    block.style.animation =  "block "+ speed +"s linear infinite"
}

function allowScore(){
    hasGottenScore=false
    let nr = Math.random() < 0.5
        if (nr){
            document.getElementById("imageid").src="henrik.jpeg";
        }else{
            document.getElementById("imageid").src="imran.png";
        }
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        if (playing){
            jump()
        }else{
            window.location.reload()
        }
        
    }});
