<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/header.php";
?>

    <!-- 메인 시작 -->
    <main class="main">
        <!-- left 시작 -->
        <section class="main__left">
            <h2 class="main__left_title">Work</h2>
            <ul class="main__left_list">
                <li>
                    <h3><a href="work.php">All</a></h3>
                </li>
                <li>
                    <h3><a href="work.php">Web</a></h3>
                </li>
                <li>
                    <h3><a href="work.php">App</a></h3>
                </li>
            </ul>
        </section>
        <!-- left 끝 -->
        <!-- right 시작 -->
        <section class="main__right">
            <div class="main__right_title">
                <?
                    $query = "select * from project order by num desc";
                    $result = mq($query);
                    while($row = mysqli_fetch_array($result)){
                ?>
                <h2>
                    <?=$row['workTitle']?>
                    <span><?=$row['workSub']?></span>
                </h2>
                <? } ?>
            </div>
            <div class="main__right_ind">
                <button type="button" data-text="prev" class="active"></button>
                <button type="button" data-text="next"></button>
            </div>
            <button type="button" class="main__right_img">
                <?
                    $query = "select * from project order by num desc";
                    $result = mq($query);
                    while($row = mysqli_fetch_array($result)){
                ?>
                <figure data-num="<?=$row['num']?>"></figure>
                <? } ?>
            </button>
            <ul class="main__right_list">
                <?
                    $query = "select * from project order by num desc";
                    $result = mq($query);
                    while($row = mysqli_fetch_array($result)){
                ?>
                <li data-num="<?=$row['num']?>">
                    <button type="button">
                        <div>
                            <time><?=$row['date']?></time>
                            <small>WebSite</small>
                        </div>
                        <p><?=$row['workTitle']?></p>
                    </button>
                </li>
                <? } ?>
            </ul>
            <figure class="main__right_preview"></figure>
            <?
                $query = "select * from detail order by num desc";
                $result = mq($query);
                while($row = mysqli_fetch_array($result)){
            ?>
            <article class="main__detail_wrapper">
                <div class="main__detail">
                    <h3 class="main__detail_title">
                        <?=$row['title']?>
                        <small><?=$row['sub']?></small>
                    </h3>
                    <img src="asset/img/work/detail/<?=$row['img']?>" alt="#">
                    <span class="main__detail_scroll"></span>
                </div>
                <div class="main__detail">
                    <figure class="main__detail_img"></figure>
                    <figcaption class="main__detail_text">
                        <p>Title<span><?=$row['title']?></span></p>
                        <p>Period<span><?=$row['period']?></span></p>
                        <p>Participation<span><?=$row['participation']?></span></p>
                        <p>Technology Stack<span><?=$row['technology']?></span></p>
                        <p>Device<span><?=$row['device']?></span></p>
                        <p>Explanation
                            <text><?=$row['explanation']?></text>
                        </p>
                        <a href="<?=$row['link']?>" target="_blank"
                            class="main__detail_text_link">go to website.</a>
                    </figcaption>
                </div>
                <button type="button" class="main__detail_close"></button>
            </article>
            <? } ?>
        </section>
        <!-- right 끝 -->
    </main>
    <!-- 메인 끝 -->
</body>

</html>