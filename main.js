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
    var menu = document.getElementById("mobile-drop-menu");
    if (menu.style.display == "none"){
        menu.style.display = "block";
        return;
    }
    menu.style.display = "none";
}
