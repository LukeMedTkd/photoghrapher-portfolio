/*------------------ CARDS ANIMATIONS ------------------*/
function flipCard_front(card_inner_id, overlay_id) {
    var card = document.getElementById(card_inner_id);
    var overlay = document.getElementById(overlay_id);
    card.classList.remove("animating_back");
    card.classList.add("animating_front");
    overlay.className += ' overlay_faded';
}

function flipCard_back(card_inner_id, overlay_id) {
    var card = document.getElementById(card_inner_id);
    card.classList.remove("animating_front");
    card.classList.add("animating_back");
    var overlay = document.getElementById(overlay_id);
    overlay.classList.remove('overlay_faded');
}


function show(){
    document.getElementById("drop-menu").style.display = "block";
}

function hide(){
    document.getElementById("drop-menu").style.display = "none";
}

function menu(){
    let stocazzo = document.getElementById("mobile-drop-menu");
    // console.log("stocazzo detected")
    // console.log(stocazzo.style.display)
    if(stocazzo.style.display === "none"){
        stocazzo.style.display = "block";
    }
    else{
        stocazzo.style.display = "none";
    }
    //document.getElementById("mobile-drop-menu").style.display === "none" ? document.getElementById("mobile-drop-menu").style.display = "block" : document.getElementById("mobile-drop-menu").style.display = "none";
}
