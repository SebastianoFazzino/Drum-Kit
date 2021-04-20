/*
    using a for loop, we determine if any key is pressed or 
    any drum button is clicked and we call 'makeSound' and 'buttonAnimation'
    functions accordingly
*/
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document
        .querySelectorAll(".drum")[i]
        .addEventListener("click", function () {

            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


// makes sound depending to what button is clicked or what key is pressed on the keyboard
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default: console.log(buttonInnerHTML);
    }
}

// applies and removes animations to the buttons
function buttonAnimation(currentKey) {
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");

    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 200);
}