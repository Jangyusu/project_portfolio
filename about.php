<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yusu's portfolio | about</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="asset/common/js/util.js"></script>
    <script src="asset/common/js/common.js"></script>
    <script src="asset/js/about.js"></script>
    <link rel="icon" href="asset/common/img/favicon.png" type="image/png">
    <link rel="stylesheet" href="asset/css/about.css">
</head>

<body>
    <!-- 헤더 시작 -->
    <?
        include_once $_SERVER['DOCUMENT_ROOT']."/project_portfolio/asset/common/php/header.php";
    ?>
    <!-- 헤더 끝 -->
    <!-- 메인 시작 -->
    <main class="main">
        <h2 class="main__title active">About</h2>
        <!-- visual 시작 -->
        <section class="main__visual">
            <figure class="main__visual_img">
                <div></div>
            </figure>
            <figcaption class="main__visual_text">
                <span></span>
                <strong>Burn my Passion!</strong>
                <p>항상 새로운 것에 끊임없이 도전하며<br> 실패를 두려워하지 않는 열정 넘치는 개발자입니다.</p>
            </figcaption>
        </section>
        <!-- visual 끝 -->
        <!-- introduce 시작 -->
        <section class="main__introduce">
            <!-- passion 시작 -->
            <article class="main__introduce_passion">
                <h3>Passion</h3>
                <strong>열정은 세상을 움직인다.</strong>
                <p>나의 열정은, 내가 생각하고 계획해서 만든 웹사이트를 통해<br>사용자에게 특별한 경험으로 전달될 것이다.</p>
            </article>
            <!-- passion 끝 -->
            <!-- vision 시작 -->
            <article class="main__introduce_vision">
                <h3>Vision</h3>
                <strong>나는 프론트엔드 개발자다.</strong>
                <ul>
                    <li>
                        <p>Name.</p>
                        <p>장유수 (Jang yusu)</p>
                    </li>
                    <li>
                        <p>Date of birth.</p>
                        <p>1995. 08. 28</p>
                    </li>
                    <li>
                        <p>Phone.</p>
                        <p>010. 2911. 6847</p>
                    </li>
                    <li>
                        <p>E-mail.</p>
                        <p>dbtnss@naver.com</p>
                    </li>
                    <li>
                        <p>Live.</p>
                        <p>대한민국, 인천광역시</p>
                    </li>
                    <li>
                        <p>Github.</p>
                        <p>https://github.com/Jangyusu</p>
                    </li>
                    <li>
                        <p>Blog.</p>
                        <p>https://jangyusu.github.io</p>
                    </li>
                    <li>
                        <p>Education.</p>
                        <p>인하공업전문대학교 전기정보과 졸업<br>강남그린컴퓨터아카데미 프론트엔드과정 수료</p>
                    </li>
                    <li>
                        <p>Tech stack.</p>
                        <div class="main__introduce_vision_tech">
                            <div>
                                <strong>
                                    Hard
                                    <img src="asset/img/about/information.png" alt="information">
                                    <span class="main__introduce_vision_tech_info">자주 이용하거나 능숙하게 사용가능한 기술입니다.</span>
                                </strong>
                                <small>HTML5, CSS3, Javascript, jQuery, SCSS, Git, ajax</small>
                            </div>
                            <div>
                                <strong>
                                    Soft
                                    <img src="asset/img/about/information.png" alt="information">
                                    <span class="main__introduce_vision_tech_info">가끔 이용하거나 한번 사용해봤으며 앞으로 공부해 나갈
                                        기술입니다.</span>
                                </strong>
                                <small>React, Bootstrap, php, MySQL</small>
                            </div>
                        </div>
                    </li>
                </ul>
            </article>
            <!-- vision 끝 -->
        </section>
        <!-- introduce 끝 -->
    </main>
    <!-- 메인 끝 -->
</body>

</html>