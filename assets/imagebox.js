// have the imagebox object expand to a larger size on click

// get the imagebox element
var imagebox = document.querySelector("#imagebox");
var imageChild = document.querySelector("#imagebox img");
// add event listener to the imagebox
imageChild.addEventListener("click", ib_onclick);

const imageArray = ["assets/images/main_headshot.jpg", "assets/images/meme1.jpg"];

var image_state = 0;

// function to expand or shrink the imagebox
function ib_onclick() {
    // check if the imagebox is expanded
    switch (image_state) {
        case 0:
            imagebox.classList.add("imagebox-expanded");
            image_state = 1;
            break;
        case 1:
            imagebox.classList.remove("imagebox-expanded");
            image_state = 0;
            break;
    }
}
