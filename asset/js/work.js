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
        workDetailWrapper = document.querySelector(".main__detail_wrapper"),
        workDetailClose = document.querySelector(".main__detail_close"),
        workDetailPrev = document.querySelector(".main__detail_prev"),
        workDetailNext = document.querySelector(".main__detail_next"),
        workDetailIndex = 0,
        workDetailBln = true;



    for (var i = 0; i < workDetail.length; i++) {
        workDetail[i].style.transform = "translate(" + i + "00%)";
    }

    function detailSlide() { //work 상세보기 이전/다음 버튼
        detailEvent(workDetailPrev, 1); //이전 버튼
        detailEvent(workDetailNext, -1); //다음 버튼

        function detailEvent(target, calc) {
            target.addEventListener("click", function () {
                if (workDetailBln) {
                    workDetailBln = false;

                    workDetailIndex = workDetailIndex + calc;

                    for (var i = 0; i < workDetail.length; i++) {
                        workDetail[i].style.transform = "translate(" + (workDetailIndex + i) + "00%)";
                    }

                    removeActive(workDetailPrev);
                    removeActive(workDetailNext);
                    if (workDetailIndex == 0) {
                        addActive(workDetailPrev);
                    } else if (workDetailIndex == (-workDetail.length + 1)) {
                        addActive(workDetailNext);
                    };

                    setTimeout(function () {
                        workDetailBln = true
                    }, 1000);
                };
            });
        }
    }
    detailSlide();

    function detailOnOff() { //work 상세보기 on/off
        for (var i = 0; i < workImg.length; i++) { //work 상세보기 on
            detaileOn(workImg);
            detaileOn(workList);
        };

        workDetailClose.addEventListener("click", function () { //work 상세보기 off
            removeActive(workDetailWrapper);

            setTimeout(function () { //work 상세보기 off후 초기화
                workDetailIndex = 0;

                for (var i = 0; i < workDetail.length; i++) {
                    workDetail[i].style.transform = "translate(" + i + "00%)";
                }
            }, 100);
        });

        function detaileOn(target) { //work 상세보기 함수
            target[i].addEventListener("click", function (e) {
                e.preventDefault();

                addActive(workDetailWrapper);

                addActive(workDetailPrev);
                removeActive(workDetailNext);
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