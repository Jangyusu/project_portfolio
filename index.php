<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/header.php";
?>

    <!-- 메인 시작 -->
    <main class="visual">
        <figure class="visual__bg"></figure>
        <figure class="visual__bg"></figure>
        <div class="visual__line">
            <span class="visual__line_bold"></span>
        </div>
        <ul>
            <?
                $query = "select * from project order by num desc";
                $result = mq($query);
                while($row = mysqli_fetch_array($result)){
            ?>
            <li class="visual__text">
                <p class="visual__text_wrap"><span><?=$row['homeTitle']?></span></p>
                <p class="visual__text_wrap"><span>PROJECT</span></p>
                <a href="work.php#<?=$row['num']?>" class="visual__text_link"><span>View More</span></a>
            </li>
            <? } ?>
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
        <small>(C) 2020 Jang yusu ALL RIGHTS RESERVED T.010 2911 6847</small>
    </footer>
    <!-- 푸터 끝 -->
    <div class="loading"></div>
</body>

</html>