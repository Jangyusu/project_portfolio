window.addEventListener("DOMContentLoaded", function () {
    //start

    var visualBg = document.querySelector(".visual__bg"),
        visualText = document.querySelectorAll(".visual__text_wrap"),
        visualLine = document.querySelector(".visual__line_bold");

    visualBg.style.backgroundImage = "url('asset/img/index/bg_01.jpg')"; //visual 첫 bg


    setInterval(function () {
        visualBg.classList.add("active");
    }, 1);

    setInterval(function () {
        visualLine.classList.add("active");
        for (var i = 0; i < visualText.length; i++) {
            visualText[i].classList.add("active");
        }
    }, 2000);

    //end
})