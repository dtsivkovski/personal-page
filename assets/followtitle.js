// title that will follow the user's mouse onclick with absolute positioning
// when clicked again, the title will return to relative positioning and won't follow the mouse
function ft_onclick(e) {
    // get the title element
    var title = document.querySelector("#followTitle");
    var titleContainer = document.querySelector("#followTitleContainer");
    // check if the title is following the mouse
    if (title.classList.contains("follow-title-active")) {
        // remove the active class
        title.className = "title has-text-dark has-text-centered font-georgia";
        // remove event listener
        document.addEventListener("mousemove", onMouseMoveTitle);
        // add the title back to the container
        title.remove();
        titleContainer.appendChild(title);
        // remove clone
        var titleClone = document.querySelector("#followTitleClone");
        titleClone.remove();
    } else {
        // clone the title and add it to the container, but hidden
        var titleClone = title.cloneNode(true);
        titleClone.id = "followTitleClone";
        titleClone.style.visibility = "hidden";
        // add the active class
        title.className = "title has-text-center font-georgia follow-title-active";
        document.addEventListener("mousemove", onMouseMoveTitle);
        title.remove();
        titleContainer.appendChild(titleClone);
        document.body.appendChild(title);
        // get mouse position and set title to it
        title.style.left = e.pageX - title.offsetWidth / 2 + "px";
        title.style.top = e.pageY - title.offsetHeight / 2 + "px";
        lastXSet = e.pageX;
        lastYSet = e.pageY;


    }
}

var lastXSet = 0;
var lastYSet = 0;

// onMouseMove listener to follow the mouse

function onMouseMoveTitle(e) {
    // get the title element
    var title = document.querySelector("#followTitle");
    // check if the title is following the mouse
    if (title.classList.contains("follow-title-active")) {
        // set the title to the mouse position
        title.style.left = e.pageX - title.offsetWidth / 2 + "px";
        title.style.top = e.pageY - title.offsetHeight / 2 + "px";

        // randomize rgb color of the title if mouse has moved
        if (Math.abs(lastXSet - e.pageX) > 50 || Math.abs(lastYSet - e.pageY) > 50) {
            title.style.color = "rgb(" + Math.floor(Math.random() * 150) + "," + Math.floor(Math.random() * 150) + "," + Math.floor(Math.random() * 150) + ")";
            lastXSet = e.pageX;
            lastYSet = e.pageY;
        }
    }
}

// add event listener to the title
document.querySelector("#followTitle").addEventListener("click", ft_onclick);
