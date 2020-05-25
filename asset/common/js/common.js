window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var nav = document.querySelector(".header__nav"),
        navList = document.querySelectorAll(".header__nav_left_list li"),
        navLine = document.querySelector(".header__nav_line"),
        navLeft = document.querySelector(".header__nav_left"),
        navRight = document.querySelector(".header__nav_right"),
        navBln = true,

        headerLogo = document.querySelector(".header__title"),
        headerMenu = document.querySelector(".header__menu"),
        headerMenuSpan = document.querySelectorAll(".header__menu span"),
        headerTitle = document.querySelector(".header__title a");



    function firstEvent() { //초기값 실행
        if (sessionStorage.getItem("check") == "on") {
            pageSwitch("0s", "0s", "0s", "0s", addActive); //header menu on
            for (var i = 0; i < navList.length; i++) {
                addActive(navList[i]);
            }

            setTimeout(function () { //header menu off
                pageSwitch("1s cubic-bezier(0.87, 0, 0.13, 1)", ".2s ease-in-out", ".7s", ".2s", removeActive);
                textSlideFun(removeActive);
            }, 100);
        }

        sessionStorage.setItem("check", "on");

        function pageSwitch(fir, sec, thi, four, fun) { //header menu on/off 함수
            nav.style.transition = fir;
            navLine.style.transition = sec;
            navLeft.style.transition = thi;
            navRight.style.transition = thi;
            for (var i = 0; i < headerMenuSpan.length; i++) {
                headerMenuSpan[i].style.transition = four;
            }

            fun(nav);
            fun(navLine);
            fun(navRight);
            fun(headerMenu);
            for (var i = 0; i < navList.length; i++) {
                navList[i].style.transition = thi;
            }
        }
    }
    firstEvent();

    function pageChange() { //페이지 이동 함수
        window.addEventListener("keydown", function (e) { //새로고침
            if (e.keyCode == 116) {
                refresh(e);
            }
        });

        headerLogo.addEventListener("click", function (e) { //header Logo click
            refresh(e);
        });

        function refresh(e) {
            e.preventDefault();
            if (!headerMenu.classList.contains("active")) { //menu 열린상태로 클릭 시
                sessionStorage.removeItem("check");
            }
            location.href = "index.html";
        }
    }
    pageChange();

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
    });

    function textSlideFun(fun) { //text Slide 함수
        for (var i = 0; i < navList.length; i++) { //text Slide 반복
            var textSlide = textSlideFunction(i, fun);
            textSlide();
        }

        function textSlideFunction(j, fun) { //text slide 실행
            return function () {
                setTimeout(function () {
                    fun(navList[j]);
                }, j * 75);
            }
        }
    }

    //end
});