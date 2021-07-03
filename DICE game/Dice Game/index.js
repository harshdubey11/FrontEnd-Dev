function func(){
var r1 = Math.random();
r1=Math.floor(r1*6);
var r2 = Math.random();
r2=Math.floor(r2*6);
var x=document.querySelector(".img1");
var z = document.querySelector("a");
if(r1>r2){
    z.innerHTML="Player 1 Wins !";
}
else if(r1==r2){
z.innerHTML="Its a tie!";}
else z.innerHTML="PLayer 2 wins!";

if(r1==1){
    x.setAttribute("src","images/dice1.png");
}
else if(r1==2){
    x.setAttribute("src","images/dice2.png");
}
else if(r1==3){
    x.setAttribute("src","images/dice3.png");
}
else if(r1==4){
    x.setAttribute("src","images/dice4.png");
}
else if(r1==5){
    x.setAttribute("src","images/dice5.png");
}
else{
    x.setAttribute("src","images/dice6.png");
}

var y=document.querySelector(".img2");
if(r2==1){
    y.setAttribute("src","images/dice1.png");
}
else if(r2==2){
    y.setAttribute("src","images/dice2.png");
}
else if(r2==3){
    y.setAttribute("src","images/dice3.png");
}
else if(r2==4){
    y.setAttribute("src","images/dice4.png");
}
else if(r2==5){
    y.setAttribute("src","images/dice5.png");
}
else{
    y.setAttribute("src","images/dice6.png");
}
}