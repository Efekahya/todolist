var flush = document.getElementById("flush");
var clean = document.getElementById("clean");
var store = document.getElementById("save");
var submit = document.getElementById("submit");
var listem = document.getElementById("listarea");
var text = document.getElementById("textbox");
var goahead = true;

listem.addEventListener("click", cizgicek);
submit.onclick = list;
clean.onclick = clear;
store.onclick = save;
flush.onclick = sil;

function list() {
    const createLi = document.createElement("li");
    createLi.className = "non-deleted";
    createLi.setAttribute("id", "listelemanlari");

    if (text.value === "") {
        text.focus();
    } else {
        createLi.innerText = text.value;
        listem.appendChild(createLi);
        text.value = "";
        text.focus();
    }
}

function sil() {
    listem.innerHTML = "";
}

function clear() {
    for (let i = 0; i < listem.children.length; i++) {
        if (listem.children[i].className === "deleted") {
            listem.children[i].className = "silinecek";
        }
    }
    var elements = document.getElementsByClassName("silinecek");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function save() {
    console.log("Hello");
}

function cizgicek(e) {
    var x = e.target;
    if (x.className === "non-deleted") {
        x.style["text-decoration"] = "line-through";
        x.className = "deleted";
    } else {
        x.style["text-decoration"] = "none";
        x.className = "non-deleted";
    }
}
