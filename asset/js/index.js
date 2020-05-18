window.addEventListener("DOMContentLoaded", function () {
    //start

    var visualBg = document.querySelector(".visual__bg"),
        visualText = document.querySelectorAll(".visual__text_wrap"),
        visualLine = document.querySelector(".visual__line_bold"),
        visualLink = document.querySelector(".visual__text_link"),
        headerMenu = document.querySelector(".header__menu");

    visualBg.style.backgroundImage = "url('asset/img/index/bg_01.jpg')"; //visual first bg

    headerMenu.addEventListener("click", function () { //header menu on/off
        this.classList.toggle("active");
    })


    setInterval(function () { //visual Bg on
        visualBg.classList.add("active");
    }, 1);

    setInterval(function () {
        visualLine.classList.add("active"); //visual Line on
        for (var i = 0; i < visualText.length; i++) { //visual Text on
            visualText[i].classList.add("active");
        }

        setInterval(function () { //view Project on
            visualLink.classList.add("active");
        }, 1500);
    }, 500);

    //end
})