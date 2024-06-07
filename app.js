var loePosition = 20;
var forward = false;




function moveleo(type){
 var leo = document.getElementById("leo");

  if(type === "forward"){
    loePosition += 5;px
    leo.style.left = loePosition + "px"
    if(!forward){
      leo.src = "images/leo3.gif"
    }
    forward = true;
    //leo1.src = "images/leo3.gif"
    setTimeout(function(){
        leo1.src = "images/leo1.gif"
        forward = false;
    }, 2000)
  }
}


if(type === "backward"){
  loePosition -= 20;px
  leo.style.left = loePosition + "px"
  //leo1.src = "images/leo2.gif"
  // setTimeout(function(){
  //     leo1.src = "images/leo1.gif"
  // }, 2000)
}


function action(event){
    if(event.key === "d"){ 
        moveleo("forward");
}else if(event.key === "a"){
    moveleo("backward");
 }
}

window.addEventListener("keydown", action)