var words
var gameState = 0
var displayword,myword

function preload(){
  BGimg = loadImage("background(white).jpg")
  sound = loadSound("music.mp3")
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  start = createButton("Start")
  start.position(displayWidth/2, displayHeight/2)
  word = createElement("h2")
  word.position(displayWidth/2, displayHeight/2-100)
  heading = createElement("h2","Enter your word : ")
  input = createInput("")
}

function draw() {
  background(BGimg); 
  start.mousePressed(()=>{
    gameState= 1
    start.hide()
  })
  if(gameState === 1){
    sound.loop()
  display()

  match = createButton("Match")
  match.position(displayWidth/2+100, displayHeight/2+100)
  match.mousePressed(()=>{
    gameState = 2
    myword = input.value()
  })

  }

  if(gameState === 2){
     if(displayword === myword) {
       gameState = 1
     } else{
       end();
     }
  }
}

function display(){
  if(frameCount% 150 === 0 || displayword === myword){
    var rand = Math.round(random(0,1500))
    word.html(words[rand].trim())
    displayword = words[rand]
    heading.position(displayWidth/2-100, displayHeight/2-25)
    input.position(displayWidth/2+100, displayHeight/2)
}
}

function end(){
  input.hide()
  word.hide()
  heading.hide()
  textSize(35)
  text("GAME OVER(sry, u wrote the wrong word)", displayWidth/2-100, displayHeight/2)
  match.hide()
}

