window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var header = document.querySelector(".header"),
        workMenu = document.querySelectorAll(".main__left_list li h3 a"),
        workList = document.querySelectorAll(".main__right_list li"),
        workPreview = document.querySelector(".main__right_preview"),
        workBtn = document.querySelector(".main__right_ind"),
        workTitle = document.querySelectorAll(".main__right_title h2"),
        workImg = document.querySelectorAll(".main__right_img figure"),
        workIndex = 0,
        workBln = true,
        workDetail = document.querySelectorAll(".main__detail"),
        workDetailWrapper = document.querySelectorAll(".main__detail_wrapper"),
        workDetailText = document.querySelectorAll(".main__detail_text"),
        workDetailLink = document.querySelectorAll(".main__detail_text_link"),
        workDetailClose = document.querySelectorAll(".main__detail_close"),
        workDetailIndex = 0,
        workDetailBln = true;



    for (var i = 0; i < workDetailWrapper.length; i++) { //work 상세메뉴 휠 기능
        workDetailWrapper[i].addEventListener("mousewheel", function (e) {
            e.preventDefault();

            if (workDetailBln) { //중복 실행 방지
                workDetailBln = false;

                if (e.deltaY > 0) { //아래로 휠
                    detailSlide(1, addActive);

                    setTimeout(function () {
                        for (var i = 0; i < workDetailText.length; i++) {
                            addActive(workDetailText[i]);
                        }

                        setTimeout(function () {
                            for (var i = 0; i < workDetailLink.length; i++) {
                                console.log(this);
                                addActive(workDetailLink[i]);
                            }
                        }, 1200);
                    }, 1000);
                } else { //위로 휠
                    detailSlide(-1, removeActive);
                }

                setTimeout(function () { //중복 실행 방지 시간
                    workDetailBln = true;
                }, 1000);
            };
        });
    };

    function detailSlide(calc, fun) {
        workDetailIndex = workDetailIndex + calc;

        if (workDetailIndex == 2) {
            workDetailIndex = 1;
        } else if (workDetailIndex == -1) {
            workDetailIndex = 0;
        };

        for (var i = 0; i < workDetail.length; i++) {
            fun(workDetail[i]);
        };
    };

    function detailOnOff() { //work 상세보기 on/off
        for (var i = 0; i < workList.length; i++) { //work 상세보기 on
            workImg[i].addEventListener("click", function (e) {
                e.preventDefault();

                addActive(workDetailWrapper[this.dataset.num - 1]);
            });

            workList[i].addEventListener("click", function (e) {
                e.preventDefault();

                addActive(this);
                addActive(workDetailWrapper[this.dataset.num - 1]);
            });
        };

        for (var i = 0; i < workDetailClose.length; i++) {
            workDetailClose[i].addEventListener("click", function () { //work 상세보기 off
                for (var i = 0; i < workDetailWrapper.length; i++) {
                    removeActive(workDetailWrapper[i]);
                    removeActive(workDetailLink[i]);
                    removeActive(workDetailText[i]);
                }

                setTimeout(function () { //work 상세보기 off후 초기화
                    workDetailIndex = 0;

                    for (var i = 0; i < workDetail.length; i++) {
                        removeActive(workDetail[i]);
                    }
                }, 1000);
            });
        }
    }
    detailOnOff();

    function firstEvent() { //초기값 실행
        setTimeout(function () {
            addActive(header); //header 색상 변경
            addActive(workMenu[0]); //header 색상 변경
            addActive(workTitle[workIndex]); //workTitle on
        }, 900)

        for (var i = 0; i < workImg.length; i++) { //workImg 삽입
            workImg[i].style.backgroundImage = "url('asset/img/work/bg_0" + (i + 1) + ".jpg')";
        };
    }
    firstEvent();

    for (var i = 0; i < workList.length; i++) {
        workList[i].addEventListener("mouseenter", function () { //work List 마우스 오버시
            addActive(workPreview);
            workPreview.style.backgroundImage = "url('asset/img/work/preview_0" + this.dataset.num + ".jpg')"
        });

        workList[i].addEventListener("mouseleave", function () {  //work List 마우스 리브시
            removeActive(workPreview);
        });
    };

    workBtn.addEventListener("click", function (e) { //work slide button
        if (workBln == true) { //중복 실행 방지
            workBln = false;

            for (var i = 0; i < workTitle.length; i++) { //work off
                removeActive(workTitle[i]); //work Title off
                removeActive(workImg[i]); //work Img off

                workImg[i].classList.remove("right");
            }

            if (e.target.dataset.text == "prev") { //prev button
                if (workIndex > 0) { //첫번째 슬라이드까지 실행
                    workIndex--;
                    workSlide(1, 0, 0, workIndex + 1); //prev 슬라이드 실행
                };
            } else if (e.target.dataset.text == "next") { //next button
                if (workIndex < workList.length - 1) { //마지막 슬라이드까지 실행
                    workIndex++;
                    workSlide(0, 1, workList.length - 1, workIndex); //next 슬라이드 실행
                };
            }

            function workSlide(firstIndex, secondIndex, trues, imgIndex) { //workSlide 함수
                removeActive(workBtn.children[firstIndex]);

                if (workIndex == trues) {
                    addActive(workBtn.children[secondIndex]);
                };

                workImg[imgIndex].classList.add("right");
            }

            addActive(workTitle[workIndex]); //work Title on
            addActive(workImg[workIndex]); //work img on

            setTimeout(function () { //중복 실행 방지 시간
                workBln = true;
            }, 600);
        }
    });

    //end
})