var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomno2 = Math.floor(Math.random() * 6) + 1;

var dicename1 = "dice" + randomno1 + ".png";
var dicename2 = "dice" + randomno2 + ".png";

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.setAttribute("src", "images/" + dicename1);
dice2.setAttribute("src", "images/" + dicename2);
var heading=document.querySelector("h1");
if(randomno1===randomno2){
    heading.innerHTML="DRAW!";
}
else if(randomno1>randomno2){
    heading.innerHTML="Player 1 WINS";
}
else{
    heading.innerHTML="Player 2 WINS";
}