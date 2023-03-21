

var buttonsLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonsLength; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("clicked!!");
    }

    );

}