window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    $(".header").load("/asset/common/html/header.html"); //header 로드

    setTimeout(function () { //html 로드 후 실행
        //start

        var nav = document.querySelector(".header__nav"),
            navList = document.querySelectorAll(".header__nav_left_list li"),
            navLine = document.querySelector(".header__nav_line"),
            navLeft = document.querySelector(".header__nav_left"),
            navRight = document.querySelector(".header__nav_right"),
            navBln = true,

            headerMenu = document.querySelector(".header__menu"),
            headerMenuSpan = document.querySelectorAll(".header__menu span"),
            headerTitle = document.querySelector(".header__title a");



        function firstEvent() { //초기값 실행
            nav.style.transition = "0s";
            navLine.style.transition = "0s";
            navLeft.style.transition = "0s";
            navRight.style.transition = "0s";
            for (var i = 0; i < headerMenuSpan.length; i++) {
                headerMenuSpan[i].style.transition = "0s";
            };

            addActive(nav);
            addActive(navLine);
            addActive(navRight);
            addActive(headerMenu);
            for (var i = 0; i < navList.length; i++) {
                navList[i].style.transition = "0s";
                addActive(navList[i]);
            };

            setTimeout(function () {
                nav.style.transition = "1s cubic-bezier(0.87, 0, 0.13, 1)";
                navLine.style.transition = ".2s ease-in-out";
                navLeft.style.transition = ".7s";
                navRight.style.transition = ".7s";
                for (var i = 0; i < headerMenuSpan.length; i++) {
                    headerMenuSpan[i].style.transition = ".2s";
                };

                removeActive(nav);
                removeActive(navLine);
                removeActive(navRight);
                removeActive(headerMenu);
                for (var i = 0; i < navList.length; i++) {
                    navList[i].style.transition = ".7s";
                };
                textSlideFun(removeActive);
            }, 100);
        }
        firstEvent();

        headerMenu.addEventListener("click", function () { //header menu on/off
            if (navBln == true) { //중복 실행 방지
                navBln = false;

                if (!this.classList.contains("active")) { //header menu on
                    addActive(this);
                    addActive(nav);
                    headerColor(addActive, 200);

                    setTimeout(function () {
                        addActive(navLine);
                        addActive(navRight);

                        textSlideFun(addActive); //text Slide on
                    }, 600);
                } else { //header menu off
                    removeActive(this);
                    removeActive(navLine);
                    removeActive(navRight);

                    headerColor(removeActive, 800);

                    setTimeout(function () {
                        removeActive(nav);
                    }, 100);

                    textSlideFun(removeActive);  //text Slide off
                }

                function headerColor(list, time) { //header color 변경
                    setTimeout(function () {
                        list(headerTitle);
                        for (var i = 0; i < headerMenuSpan.length; i++) {
                            list(headerMenuSpan[i]);
                        }
                    }, time);
                }

                setTimeout(function () { //중복 실행 방지 시간
                    navBln = true;
                }, 1000);
            }
        })

        function textSlideFun(fun) { //text Slide 함수
            for (var i = 0; i < navList.length; i++) { //text Slide 반복
                var textSlide = textSlideFunction(i, fun);
                textSlide();
            };

            function textSlideFunction(j, fun) { //text slide 실행
                return function () {
                    setTimeout(function () {
                        fun(navList[j]);
                    }, j * 75);
                }
            };
        }

        //end
    }, 50);
})