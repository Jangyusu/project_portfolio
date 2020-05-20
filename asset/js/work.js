window.addEventListener("DOMContentLoaded", function () { //문서 로드 후 실행
    //start

    var header = document.querySelector(".header"),
        workMenu = document.querySelectorAll(".main__left_list li h3 a"),
        workList = document.querySelectorAll(".main__right_list li"),
        workPreview = document.querySelector(".main__right_preview");



    addActive(header); //header 색상 변경
    addActive(workMenu[0]); //header 색상 변경
    for (var i = 0; i < workList.length; i++) {
        workList[i].addEventListener("mouseenter", function () {
            addActive(workPreview);
            workPreview.style.backgroundImage = "url('/asset/img/work/preview_0" + this.dataset.num + ".jpg')"
        });

        workList[i].addEventListener("mouseleave", function () {
            removeActive(workPreview);
        });
    }

    //end
})