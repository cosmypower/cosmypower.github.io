const VIEWS_COUNT = 7;
const START_VIEW = 2;

const text = "ROX..@IOA..@RALUCA!!!";
const element = this.document.getElementById("text-render");
var current_index = 0;
var current_text_split = 0;
function renderText() {
    var current_text = text.split("@")[current_text_split];
    if (current_index < current_text.length) {
        element.innerHTML += current_text[current_index];
        current_index++;
      setTimeout(renderText, 200);
    } else {
        if ((current_text_split + 1) < text.split("@").length) {
            current_index = 0;
            element.innerHTML = "";
            current_text_split++;
            setTimeout(renderText, 1000);
        }
    }
}

function runScript() {
    var current_view = START_VIEW;
    var text_view = document.getElementById("view0");
    text_view.style.display = "none";

    var first_view = document.getElementById("view1");
    first_view.classList.add('trigger');

    first_view.style.display = "block";

    var interval = setInterval(() => {
        var old_view = document.getElementById("view" + (current_view - 1));
        var view = document.getElementById("view" + current_view);
        if (!view) return;

        if (old_view) {
            old_view.style.display = "none";
        }

        view.style.display = "block";
        view.classList.add('trigger');

        if (current_view == 2) {
            renderText();
        }

        if (++current_view > VIEWS_COUNT) clearInterval(interval); 
    }, 7000);
}

function acceptValentine() {
    var last_view = document.getElementById("view" + VIEWS_COUNT);
    last_view.style.display = "none";

    var valentine_view = document.getElementById("accepted-view");

    valentine_view.classList.add("trigger");
    valentine_view.style.display = "flex";

    const audio = new Audio('meow.wav');
    audio.play();
}

window.addEventListener("load", function () {
    return;
    
});