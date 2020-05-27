window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var header = document.querySelector(".header"),
        section = document.querySelectorAll("section"),
        visualTitle = document.querySelector(".main__title"),
        visualImg = document.querySelector(".main__visual_img"),
        visualLine = document.querySelector(".main__visual_text span"),
        visualFirstTxt = document.querySelector(".main__visual_text strong"),
        visualSecondTxt = document.querySelector(".main__visual_text p"),
        introImg = document.querySelectorAll(".main__introduce_vision_tech img"),
        introInfo = document.querySelectorAll(".main__introduce_vision_tech_info"),
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

    window.addEventListener("mousewheel", function (e) {
        if (scrollBln) { //중복 실행 방지
            scrollBln = !scrollBln;

            if (e.deltaY > 0) { //아래로 휠
                wheelIndex(1, section.length, section.length - 1, removeActive, 600);
            } else { //위로 휠
                wheelIndex(-1, -1, 0, addActive, 0);
            }

            for (var i = 0; i < section.length; i++) {
                section[i].style.transform = "translateY(-" + scrollIndex + "00%)";
            }

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
            fun(header);
            fun(visualTitle);
        }, time);
    }
    //end
});