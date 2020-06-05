# 포트폴리오 랜딩페이지 제작

개인적인 포트폴리오 또는 실무에서 직접 참여했던 다양한 작업물들을 소개하는 사이트입니다.

## 들어가며...

* 본 웹 사이트는 상업용 목적이 아닌 개인용 포트폴리오 목적으로 제작되었습니다.
* URL : http://dbtnss2.dothome.co.kr

## 웹 사이트 예시

![page_main](https://github.com/Jangyusu/project_portfolio/blob/master/readme/img/index_01.jpg)
![page_main](https://github.com/Jangyusu/project_portfolio/blob/master/readme/img/menu_01.jpg)
![page_main](https://github.com/Jangyusu/project_portfolio/blob/master/readme/img/work_04.jpg)
![page_main](https://github.com/Jangyusu/project_portfolio/blob/master/readme/img/about_01.jpg)
![page_main](https://github.com/Jangyusu/project_portfolio/blob/master/readme/img/contact_01.jpg)

## 주요 코드
### 메인 페이지
```javascript
function visualControl(calc, condition, reset) { //visual Next, Prev 실행
        if (visualBln == true) { //중복 실행 방지
            visualBln = false;

            removeActive(visualLine); //visual Line off
            clearInterval(slideStop); //슬라이드 초기화

            visualIndex = visualIndex + calc;
            if (visualIndex == condition) { //visual Index 초기화
                visualIndex = reset;
            }
            visualCurrent.innerHTML = "0" + (visualIndex + 1); //visual Index업데이트

            if (calc == 1) { //visual Next 실행
                slideUpDown("150%", "slideUp");
            } else { //visual Prev 실행
                slideUpDown("-50%", "slideDown");
            }

            function slideUpDown(top, className) { //slide Event
                visualNextBg.style.top = top; //visual Next 배경
                visualNextBg.style.backgroundImage = "url('asset/img/index/bg_0" + (visualTotal - visualIndex) + ".jpg')"; //visual Next 배경
                visualCurrentBg.classList.add(className);
                visualNextBg.classList.add(className);
                setTimeout(function () {
                    visualCurrentBg.style.backgroundImage = visualNextBg.style.backgroundImage; //visual Next 배경
                    visualCurrentBg.classList.remove(className);
                    visualNextBg.classList.remove(className);
                    visualNextBg.style.top = "150%"; //visual Next 배경
                }, 1800);
            }

            for (var i = 0; i < visualText.length; i++) {
                removeActive(visualText[i]); //visual Text on
                removeActive(visualLink[i]); //visual Link on
            }

            setTimeout(function () { //중복 실행 방지 시간
                visualBln = true;

                TextOn(); //Text on
                slideStart(); //슬라이드 시작
            }, 1800);
        }
    }
```

### about 페이지
```javascript
function wheelAndTouch() { //휠과 터치 함수
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) { // Firefox browser일 경우
            window.addEventListener("DOMMouseScroll", function (e) { //마우스 휠 [Firefox browser]
                mouseScroll(e.detail);
            });
        } else { //Firefox browser가 아닐 경우
            window.addEventListener("mousewheel", function (e) { //마우스 휠 [Crome browser]
                mouseScroll(e.deltaY);
            });
        }

        function mouseScroll(delta) {
            if (scrollBln) { //중복 실행 방지
                scrollBln = !scrollBln;

                if (delta > 0) { //아래로 휠
                    wheelIndex(1, section.length, section.length - 1, removeActive, 300);
                } else { //위로 휠
                    wheelIndex(-1, -1, 0, addActive, 0);
                }
                slide();

                setTimeout(function () { //중복 실행 방지 시간
                    scrollBln = !scrollBln;
                }, 600);
            }
        }


        var touchStartX, touchStartY, touchEndX, touchEndY;
        window.addEventListener("touchstart", function (e) { //터치 시작
            touchStartX = e.changedTouches[0].pageX;
            touchStartY = e.changedTouches[0].pageY;
        });

        window.addEventListener("touchend", function (e) { //터치 끝
            touchEndX = e.changedTouches[0].pageX;
            touchEndY = e.changedTouches[0].pageY; DOMMouseScroll

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
```


### contact 페이지
```javascript
function typing() { //input typing 함수
        for (var i = 0; i < formTyping.length; i++) {
            formTyping[i].addEventListener("focus", function () { //input focus on일 때
                addActive(this.parentNode);
                addActive(this.nextElementSibling);
            });

            formTyping[i].addEventListener("focusout", function () { //input focus off일 때
                removeActive(this.parentNode);

                if (this.value === "") {
                    removeActive(this.nextElementSibling);
                }
            });
        }

        formTel.addEventListener("keyup", function () { //input 전화번호 입력
            this.value = autoHypenPhone(this.value);
        });

        var autoHypenPhone = function (str) { //input 전화번호 입력 함수
            str = str.replace(/[^0-9]/g, '');
            var tmp = '';
            if (str.length < 4) {
                return str;
            } else if (str.length < 7) {
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3);
                return tmp;
            } else if (str.length < 11) {
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 3);
                tmp += '-';
                tmp += str.substr(6);
                return tmp;
            } else {
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 4);
                tmp += '-';
                tmp += str.substr(7);
                return tmp;
            }
        }
    }
```

## 버전 관리
### ver 1.0.0
포트폴리오 랜딩페이지 웹 사이트 오픈

## 작업자

* 장유수 - *Github* (https://github.com/Jangyusu)

## 개선해야할 점
* admin 페이지에 접속할 때 주소로 접속할 수 없게 막기
* IE 브라우저에서도 정상적으로 동작할 수 있게 크로스 브라우징 구현

