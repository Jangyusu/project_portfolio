window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var header = document.querySelector(".header"),
        formTyping = document.querySelectorAll(".question__form_typing"),
        formTel = document.querySelectorAll("input")[3];



    function firstEvent() { //초기값 실행
        setTimeout(function () {
            addActive(header); //header 색상 변경
        }, 900);
    }
    firstEvent();



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
    typing();

    //end
})