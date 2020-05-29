window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var header = document.querySelector(".header"),
        section = document.querySelectorAll("section"),
        visualTitle = document.querySelector(".main__title"),
        visualImg = document.querySelector(".main__visual_img"),
        visualLine = document.querySelector(".main__visual_text span"),
        visualFirstTxt = document.querySelector(".main__visual_text strong"),
        visualSecondTxt = document.querySelector(".main__visual_text p"),
        scrollBln = true,
        scrollIndex = 0;



    function firstEvent() { //초기값 실행
        setTimeout(function () {
            addActive(header); //header 색상 변경
            addActive(visualImg); //visual img 축소
            addActive(visualLine); //visual line 생성
            addActive(visualFirstTxt); //visual first text 등장
            addActive(visualSecondTxt); //visual second text 등장
        }, 900);
    }
    firstEvent();



    function wheelAndTouch() { //휠과 터치 함수
        window.addEventListener("mousewheel", function (e) { //마우스 휠
            if (scrollBln) { //중복 실행 방지
                scrollBln = !scrollBln;

                if (e.deltaY > 0) { //아래로 휠
                    wheelIndex(1, section.length, section.length - 1, removeActive, 300);
                } else { //위로 휠
                    wheelIndex(-1, -1, 0, addActive, 0);
                }
                slide();

                setTimeout(function () { //중복 실행 방지 시간
                    scrollBln = !scrollBln;
                }, 600);
            }
        });


        var touchStartX, touchStartY, touchEndX, touchEndY;
        window.addEventListener("touchstart", function (e) { //터치 시작
            touchStartX = e.changedTouches[0].pageX;
            touchStartY = e.changedTouches[0].pageY;
        });

        window.addEventListener("touchend", function (e) { //터치 끝
            touchEndX = e.changedTouches[0].pageX;
            touchEndY = e.changedTouches[0].pageY;

            if (scrollBln) { //중복 실행 방지
                scrollBln = !scrollBln;

                if (touchEndX + 50 < touchStartX || touchEndY + 50 < touchStartY) { //오른쪽에서 왼쪽 혹은 아래에서 위로 터치
                    wheelIndex(1, section.length, section.length - 1, removeActive, 300);
                } else if (touchStartX + 50 < touchEndX || touchStartY + 50 < touchEndY) { //왼쪽에서 오른쪽 혹은 위에서 아래로 터치
                    wheelIndex(-1, -1, 0, addActive, 0);
                }
                slide();

                setTimeout(function () { //중복 실행 방지 시간
                    scrollBln = !scrollBln;
                }, 600);
            }
        });

        function wheelIndex(calc, condition, result, fun, time) { //wheel Index Control 함수
            scrollIndex = scrollIndex + calc;

            if (scrollIndex == condition) {
                scrollIndex = result;
            }

            setTimeout(function () {
                fun(visualTitle); //About title 색상 변경

                setTimeout(function () {
                    fun(header); //Header 색상 변경
                }, time);
            }, time);
        }

        function slide() {
            for (var i = 0; i < section.length; i++) { //section 스크롤 적용
                section[i].style.transform = "translateY(-" + scrollIndex + "00%)";
            }
        }
    }
    wheelAndTouch();

    //end
});