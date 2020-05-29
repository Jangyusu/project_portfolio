<? 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";

    $linkOrigin = $_SERVER['PHP_SELF']; //link 원본
    $linkNum = strpos($linkOrigin, '.') - 1; //link '.'까지의 길이
    $linkText = substr($linkOrigin, 1, $linkNum); //link text
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yusu's portfolio</title>
    <link rel="icon" href="asset/common/img/favicon.png" type="image/png">
    <link rel="stylesheet" href="asset/css/<?=$linkText?>.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="asset/js/<?=$linkText?>.js"></script>
</head>

<body>    
    <!-- 헤더 시작 -->
    <header class="header">
        <h1 class="header__title"><a href="index.php">YUSU</a></h1>
        <button type="button" class="header__menu">
            <span></span>
            <span></span>
        </button>
        <div class="header__side">
            <a href="tel:010-2911-6847" class="header__side_tel">T.010 2911 6847</a>
            <a href="https://github.com/Jangyusu" class="header__side_link" target="_blank">
                <img src="asset/common/img/link_01.png" alt="#">
                <span>깃허브</span>
            </a>
            <a href="https://jangyusu.github.io" class="header__side_link" target="_blank">
                <img src="asset/common/img/link_02.png" alt="#">
                <span>블로그</span>
            </a>
            <a href="#" class="header__side_link" target="_blank">
                <img src="asset/common/img/link_03.png" alt="#">
                <span>이력서</span>
            </a>
        </div>
        <nav class="header__nav">
            <div class="header__nav_left">
                <ul class="header__nav_left_list">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="work.php">Work</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><small>(C) 2020 Jang yusu ALL RIGHTS RESERVED T.010 2911 6847</small></li>
                </ul>
            </div>
            <div class="header__nav_right">
                <ul class="header__nav_right_list">
                    <li><a href="https://github.com/Jangyusu"><img src="asset/common/img/link_01.png" alt="">깃허브</a></li>
                    <li><a href="https://jangyusu.github.io"><img src="asset/common/img/link_02.png" alt="">블로그</a></li>
                    <li><a href="#"><img src="asset/common/img/link_03.png" alt="">이력서</a></li>
                </ul>
                <a href="tel:010-2911-6847" class="header__nav_right_tel">T. 010 2911 6847</a>
                <a href="mailto:dbtnss@naver.com">dbtnss@naver.com</a>
            </div>
            <span class="header__nav_line"></span>
        </nav>
    </header>
    <!-- 헤더 끝 -->