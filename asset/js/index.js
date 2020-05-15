window.addEventListener("DOMContentLoaded", function () {
    //start

    var visualBg = document.querySelector(".visual__bg"),
        visualText = document.querySelectorAll(".visual__text_wrap"),
        visualLine = document.querySelector(".visual__line_bold");



    visualBg.style.backgroundImage = "url('/asset/img/index/bg_02.jpg')";

    setTimeout(function () {
        visualBg.style.backgroundImage = "url('/asset/img/index/bg_03.jpg')";

        if (visualBg.style.backgroundImage == "url(\"/asset/img/index/bg_03.jpg\")") {
            setTimeout(function () {
                for (var i = 0; i < visualText.length; i++) {
                    visualText[i].classList.add("active");
                }

                visualLine.classList.add("active");
            }, 1000);
        }
    }, 1000);

    // setTimeout(function () {
    //     for (var i = 0; i < visualText.length; i++) {
    //         visualText[i].classList.add("active");
    //     }
    // }, 2000);

    //end
})