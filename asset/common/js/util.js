function addActive(target) { //active 클래스 추가
    target.classList.add("active");
}

function removeActive(target) { //active 클래스 제거
    target.classList.remove("active");
}

function addActives(target) { //active 클래스 횟수만큼 추가
    for (var i = 0; i < target.length; i++) {
        addActive(target[i]);
    }
}

function removeActives(target) { //active 클래스 횟수만큼 제거
    for (var i = 0; i < target.length; i++) {
        removeActive(target[i]);
    }
}