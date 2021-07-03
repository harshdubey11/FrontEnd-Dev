function addanimation(key){
var butt = document.querySelector("."+key);
butt.classList.toggle("pressed");
setTimeout(function(){
    butt.classList.remove("pressed");
},100);

}
function sound(){
    addanimation(this.innerHTML);
    var str="";
        if(this.innerHTML=="w")
        str="sounds/crash.mp3";
        else if(this.innerHTML=="a")
        str="sounds/kick-bass.mp3";
        else if(this.innerHTML=="s")
        str="sounds/snare.mp3";
        else if(this.innerHTML=="d")
        str="sounds/tom-1.mp3";
        else if(this.innerHTML=="j")
        str="sounds/tom-2.mp3";
        else if(this.innerHTML=="k")
        str="sounds/tom-3.mp3";
        else if (this.innerHTML=="l")
        str="sounds/tom-4.mp3";


var sou = new Audio(str);
sou.play();
}
function sound2(key){
    var str="";
        if(key=="w")
        str="sounds/crash.mp3";
        else if(key=="a")
        str="sounds/kick-bass.mp3";
        else if(key=="s")
        str="sounds/snare.mp3";
        else if(key=="d")
        str="sounds/tom-1.mp3";
        else if(key=="j")
        str="sounds/tom-2.mp3";
        else if(key=="k")
        str="sounds/tom-3.mp3";
        else if (key=="l")
        str="sounds/tom-4.mp3";


var sou = new Audio(str);
sou.play();
}





for(var i =0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",sound);
   
}

document.addEventListener("keydown",function(event){
var key = event.key;
sound2(key);
addanimation(key);

});