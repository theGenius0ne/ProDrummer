
// document.querySelector("button").addEventListener("click", handleClick);

var n = document.querySelectorAll(".drum").length;

//adds Listener for mouse click
for(var i = 0; i < n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonName = this.innerHTML;
        makeSound(buttonName);
        buttonAnimation(buttonName);
    });
}

// adds Listener for keyboard keys
document.addEventListener("keydown", function(event){
    // console.log(event);
    makeSound(event.key);       //event is which event triggered eventListener and key is the keyboard key
    buttonAnimation(event.key);
});



//checks the button and correspondingly makes sound
function makeSound(key){
    switch (key) {
        case "w": var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
            break;
        case "a": var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
            break;
        case "s": var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
            break;
        case "d": var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
            break;
        case "j": var snare = new Audio("sounds/snare.mp3");
                    snare.play();
            break;
        case "k": var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l": var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log("Other Pressed");
            break;
    }
}


function buttonAnimation(currKey){
    var pressedButton = document.querySelector("." + currKey);

    pressedButton.classList.add("pressed");

    setTimeout(function (){
        pressedButton.classList.remove("pressed");
    }, 100);
}

// function handleClick(){
//     console.log(this);
// }
