//1 way of creation an eventlistener
/*
document.querySelector("button").addEventListener("click",handleclick);
function handleclick(){
alert("I got Clicked!");
}
*/

/*----------------------------------------------------------------------------------------*/
//2-nd way using anonymous function
//this is for only 1 button what is we want for all button
/*
document.querySelector("button").addEventListener("click",function (){
    alert("I got Clicked!");

    //what do when click detected
    });
*/

/*----------------------------------------------------------------------------------------*/
//this for all button
/*
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){alert("I got clicked!");})
}
*/
/*----------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------*/
//how to play sound using js
/*
    for( i =0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",playmusic);

    }
function playmusic()
{
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
}
*/
/*-----------------------------------------------------------------------------------------*/

//manuplate clicked elements color
/*
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",colorchange);
}
function colorchange()
{
    this.style.color = "white";
}
*/
/*---------------------------------------------------------------------------------------*/
//switch cases
//drum using mouse
/*
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playmusic);
}
function playmusic() {
  var p_button = this.innerHTML;
  var audio;
  switch (p_button) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
    default:
      console.log(p_button);
  }
  audio.play();
}

document.addEventListener("keydown", function (p) {
  console.log(p);
});*/
//drum using keyboard
  document.addEventListener("keydown", function(event){
    playmusic2(event.key);
    button_animation(event.key);
  });

function playmusic2(current_key) {
  var p_button = current_key;
  var audio;
  switch (p_button) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
    default:
      console.log(p_button);
  }
  audio.play();
}
function button_animation(current_key)
{
    var activate_button = document.querySelector("."+current_key);
    activate_button.classList.add("pressed");

    //after 0.1 second class should be removed
    setTimeout(function(){
        activate_button.classList.remove("pressed");
    },100);
}
