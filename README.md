# 포트폴리오 랜딩페이지 제작

프론트엔드 취업을 위해 지금까지 작업했거나 앞으로 추가 할 다양한 포트폴리오를 소개하는 사이트입니다.

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

* 
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

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
