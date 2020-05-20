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
        workBln = true;



    setTimeout(function () {
        addActive(header); //header 색상 변경
        addActive(workMenu[0]); //header 색상 변경
        addActive(workTitle[workIndex]); //workTitle on
    }, 1);

    for (var i = 0; i < workList.length; i++) {
        workList[i].addEventListener("mouseenter", function () {
            addActive(workPreview);
            workPreview.style.backgroundImage = "url('/asset/img/work/preview_0" + this.dataset.num + ".jpg')"
        });

        workList[i].addEventListener("mouseleave", function () {
            removeActive(workPreview);
        });
    }

    workBtn.addEventListener("click", function (e) { //work slide button
        if (workBln == true) { //중복 실행 방지
            workBln = false;

            for (var i = 0; i < workTitle.length; i++) { //wrok title off
                removeActive(workTitle[i]);

                removeActive(workImg[i]);
                workImg[i].classList.remove("left");
                workImg[i].classList.remove("right");
            }

            if (e.target.dataset.text == "prev") { //prev button
                if (workIndex > 0) {
                    workIndex--;
                    removeActive(workBtn.children[1]);

                    if (workIndex == 0) {
                        addActive(workBtn.children[0]);
                    };

                    workImg[workIndex + 1].classList.add("right");
                };
            } else { //next button
                if (workIndex < workList.length - 1) {
                    workIndex++;
                    removeActive(workBtn.children[0]);

                    if (workIndex == workList.length - 1) {
                        addActive(workBtn.children[1]);
                    };

                    workImg[workIndex].classList.add("right");
                };
            }

            addActive(workTitle[workIndex]);
            addActive(workImg[workIndex]);

            setTimeout(function () {
                workBln = true;
            }, 600);
        }
    })

    for (var i = 0; i < workImg.length; i++) {
        workImg[i].style.backgroundImage = "url('/asset/img/work/bg_0" + (i + 1) + ".jpg')";
    }

    //end
})