function addActive(target) {
    target.classList.add("active");
}

function removeActive(target) {
    target.classList.remove("active");
}

function addActives(target) {
    for (var i = 0; i < target.length; i++) {
        addActive(target[i]);
    }
}

function removeActives(target) {
    for (var i = 0; i < target.length; i++) {
        removeActive(target[i]);
    }
}