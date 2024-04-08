// have the imagebox object expand to a larger size on click

// get the imagebox element
var imagebox = document.querySelector("#imagebox");
var imageChild = document.querySelector("#imagebox img");
// add event listener to the imagebox
imagebox.addEventListener("click", ib_onclick);

const imageArray = ["assets/images/main_headshot.jpeg", "assets/images/luna1.jpg", "assets/images/camille1.jpg", "assets/images/panda1.jpg", "assets/images/luna2.jpg", "assets/images/camille2.jpg", "assets/images/panda2.jpg", "assets/images/luna3.jpg", "assets/images/camille3.jpeg", "assets/images/panda3.jpg", "assets/images/camille-panda-together.jpg"];

var image_state = 1;
var isExpanded = false;
var audio = new Audio("assets/sounds/camera-shutter.mp3");

function imageState() {
    if (image_state > imageArray.length - 1) {
        image_state = 0;
    }
    setTimeout(function() {
        audio.play();
    }, 50);
    imagebox.classList.add("imagebox-shutter");
    setTimeout(function() {
        imageChild.src = imageArray[image_state++];
    }, 200);
    setTimeout(function() {
        imagebox.classList.remove("imagebox-shutter");
    }, 601);
}

// function to expand or shrink the imagebox
function ib_onclick() {
    if (!isExpanded) {
        imagebox.classList.add("imagebox-expanded");
        isExpanded = true;
    }
    else {
        imageState();
    }
}
