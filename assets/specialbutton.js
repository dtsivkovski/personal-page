function sp_onclick(href, element) {
    // time out url for 1 sec to do animation
    setTimeout(function() {
        // new tab 
        window.open(href, '_blank');
        setTimeout(function() {
            // remove existing animation from current element
            element.classList.remove("special-btn-clicked")
        }, 500);
    }
    , 450);
    // add existing animation to current element
    element.classList.add("special-btn-clicked");
}