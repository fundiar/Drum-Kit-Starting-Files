
var buttonsLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonsLength; i++) {
    
    // document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //     var innerhtml = this.innerHTML;
    //     makesound(innerhtml);
    //     buttonAnimation(innerhtml);
    // }
    // );

    document.addEventListener("keypress", function (evt) {
        makesound(evt.key);
        buttonAnimation(evt.key);
    }
    );
}


function makesound(event) {
    switch (event) {
        case "w":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
    
        case "a":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
    
        case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "d":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "j":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        
        default:
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}