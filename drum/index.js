var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.textContent);
        buttonAnimation(this.textContent);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key)
{
  
    if(key == 'w')
        {
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        }
        
        else if( key== 'a')
        {
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        }
        else if( key== 's')
        {
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        }
        else if( key== 'l')
        {
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        }
        else if( key== 'd')
        {
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        }
        else if( key== 'j')
        {
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        }
        else if( key== 'k')
        {
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        }
        else 
        {
            console.log(this);
        }
        
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}