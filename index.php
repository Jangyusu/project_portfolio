<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yusu's portfolio</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="asset/common/js/util.js"></script>
    <script src="asset/common/js/common.js"></script>
    <script src="asset/js/index.js"></script>
    <link rel="icon" href="asset/common/img/favicon.png" type="image/png">
    <link rel="stylesheet" href="asset/css/index.css">
</head>

<body>
    <!-- 헤더 시작 -->
    <?
        include_once $_SERVER['DOCUMENT_ROOT']."/project_portfolio/asset/common/php/header.php";
    ?>
    <!-- 헤더 끝 -->
    <!-- 메인 시작 -->
    <main class="visual">
        <figure class="visual__bg"></figure>
        <figure class="visual__bg"></figure>
        <div class="visual__line">
            <span class="visual__line_bold"></span>
        </div>
        <ul>
            <li class="visual__text">
                <p class="visual__text_wrap"><span>NINTENDO SWITCH!</span></p>
                <p class="visual__text_wrap"><span>PROJECT</span></p>
                <a href="work.php#2" class="visual__text_link"><span>View More</span></a>
            </li>
            <li class="visual__text">
                <p class="visual__text_wrap"><span>DARK KNIGHT MOVIE</span></p>
                <p class="visual__text_wrap"><span>PROJECT</span></p>
                <a href="work.php#3" class="visual__text_link"><span>View More</span></a>
            </li>
            <li class="visual__text">
                <p class="visual__text_wrap"><span>VISIT KOREA!</span></p>
                <p class="visual__text_wrap"><span>PROJECT</span></p>
                <a href="work.php#4" class="visual__text_link"><span>View More</span></a>
            </li>
            <li class="visual__text">
                <p class="visual__text_wrap"><span>ABOUT</span></p>
                <p class="visual__text_wrap"><span>ME</span></p>
                <a href="work.php#1" class="visual__text_link"><span>View More</span></a>
            </li>
        </ul>
        <div class="visual__ind">
            <button type="button" class="visual__ind_up"><img src="asset/img/index/arrow.png" alt="arrow"></button>
            <span class="visual__ind_current"></span>
            <span class="visual__ind_total"></span>
            <button type="button" class="visual__ind_down"><img src="asset/img/index/arrow.png" alt="arrow"></button>
        </div>
        <span class="visual__scroll"></span>
    </main>
    <!-- 메인 끝 -->
    <!-- 푸터 시작 -->
    <footer>
        <small>\(C\) 2020 Jang yusu ALL RIGHTS RESERVED T.010 2911 6847</small>
    </footer>
    <!-- 푸터 끝 -->
    <div class="loading"></div>
</body>

</html>