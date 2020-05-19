window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var nav = document.querySelector(".header__nav"),
        navList = document.querySelectorAll(".header__nav_left_list li"),
        navLine = document.querySelector(".header__nav_line"),
        navRight = document.querySelector(".header__nav_right"),
        navBln = true,

        headerMenu = document.querySelector(".header__menu");



    headerMenu.addEventListener("click", function () { //header menu on/off
        if (navBln == true) { //중복 실행 방지
            navBln = false;

            if (!this.classList.contains("active")) { //header menu on
                addActive(this);
                addActive(nav);

                setTimeout(function () {
                    addActive(navLine);
                    addActive(navRight);

                    textSlideFun(addActive); //text Slide on
                }, 600);
            } else { //header menu off
                removeActive(this);
                removeActive(navLine);
                removeActive(navRight);

                setTimeout(function () {
                    removeActive(nav);
                }, 100);

                textSlideFun(removeActive);  //text Slide off
            }

            function textSlideFun(fun) { //text Slide 함수
                for (var i = 0; i < navList.length; i++) { //text Slide 반복
                    var textSlide = textSlideFunction(i, fun);
                    textSlide();
                };

                function textSlideFunction(j, fun) { //text slide 실행
                    return function () {
                        setTimeout(function () {
                            fun(navList[j]);
                        }, j * 50);
                    }
                };
            }

            setTimeout(function () { //중복 실행 방지 시간
                navBln = true;
            }, 1000);
        }
    })

    //end
})