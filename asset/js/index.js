window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var visualCurrentBg = document.querySelector(".visual__bg"),
        visualNextBg = document.querySelectorAll(".visual__bg")[1],
        visualText = document.querySelectorAll(".visual__text"),
        visualLine = document.querySelector(".visual__line_bold"),
        visualLink = document.querySelectorAll(".visual__text_link"),
        visualCurrent = document.querySelector(".visual__ind_current"),
        visualTotal = document.querySelectorAll(".visual__text").length,
        visualNext = document.querySelector(".visual__ind_down"),
        visualPrev = document.querySelector(".visual__ind_up"),
        visualIndex = 0,
        visualTotalText = document.querySelector(".visual__ind_total"),
        visualBln = true,
        headerMenu = document.querySelector(".header__menu"),
        slideStop,
        loading = document.querySelector(".loading"),
        body = document.body;


    for (var i = 0; i < visualTotal; i++) { //loading img 추가
        loading.innerHTML += "<img src='asset/img/index/bg_0" + (i + 1) + ".jpg' alt=''>";
    }
    body.removeChild(loading); //loading tag 제거
    visualCurrent.innerHTML = "0" + (visualIndex + 1); //visual 현재 슬라이드 입력
    visualTotalText.innerHTML = "0" + visualTotal; //visual total 슬라이드 입력
    visualCurrentBg.style.backgroundImage = "url('asset/img/index/bg_01.jpg')"; //visual 첫 배경
    setTimeout(function () { //첫 이벤트 실행
        slideStart();
        TextOn();
    }, 1000)

    headerMenu.addEventListener("click", function () { //header menu on/off
        this.classList.toggle("active");
    })

    visualNext.addEventListener("click", () => visualControl(1, visualTotal, 0)) //visual Next 버튼
    visualPrev.addEventListener("click", () => visualControl(-1, -1, visualTotal - 1)) //visual Prev 버튼



    function slideStart() { //자동 슬라이드
        slideStop = setInterval(function () {
            visualNext.click();
        }, 5000);
    }

    function TextOn() { //Text Event
        visualLine.classList.add("active"); //visual Line on
        visualText[visualIndex].classList.add("active"); //visual Text on
        visualLink[visualIndex].classList.add("active"); //visual Link on
    }

    function visualControl(calc, condition, reset) { //visual Next, Prev 실행
        if (visualBln == true) { //중복실행 방지
            visualBln = false;

            visualLine.classList.remove("active"); //visual Line off
            clearInterval(slideStop); //슬라이드 초기화

            visualIndex = visualIndex + calc;
            if (visualIndex == condition) { //visual Index 초기화
                visualIndex = reset;
            };
            visualCurrent.innerHTML = "0" + (visualIndex + 1); //visual Index업데이트

            if (calc == 1) { //visual Next 실행
                slideUpDown("150%", "slideUp");
            } else { //visual Prev 실행
                slideUpDown("-50%", "slideDown");
            };

            function slideUpDown(top, className) { //slide Event
                visualNextBg.style.top = top; //visual Next 배경
                visualNextBg.style.backgroundImage = "url('asset/img/index/bg_0" + (visualIndex + 1) + ".jpg')"; //visual Next 배경
                visualCurrentBg.classList.add(className);
                visualNextBg.classList.add(className);
                setTimeout(function () {
                    visualCurrentBg.style.backgroundImage = visualNextBg.style.backgroundImage; //visual Next 배경
                    visualCurrentBg.classList.remove(className);
                    visualNextBg.classList.remove(className);
                    visualNextBg.style.top = "150%"; //visual Next 배경
                }, 1800);
            };

            for (var i = 0; i < visualText.length; i++) {
                visualText[i].classList.remove("active"); //visual Text on
                visualLink[i].classList.remove("active"); //visual Link on
            };

            setTimeout(function () { //슬라이드 끝난 후
                visualBln = true;

                TextOn();

                slideStart(); //슬라이드 재시작
            }, 1800);
        }
    };

    //end
})