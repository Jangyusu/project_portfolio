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
                            <p>1. 메인페이지 이미지, 텍스트 슬라이드 기능 구현(클릭, 휠, 자동)
                               2. Work페이지 리스트에 맞는 컨텐츠 뷰 구현
                               3. About페이지 마우스 휠을 이용한 원스크롤 페이지 구현
                               4. Contact페이지 사용자 정보를 서버로 전송하여 관리자가 관리하는 기능 구현</p>
                        </p>
                        <a href="<?=$row['link']?>" target="_blank"
                            class="main__detail_text_link">go to website.</a>
                    </figcaption>
                </div>
                <button type="button" class="main__detail_close"></button>
            </article>
            <? } ?>
            <!-- 포트폴리오 랜딩페이지 시작 -->
            <!-- <article class="main__detail_wrapper">
                <div class="main__detail">
                    <h3 class="main__detail_title">
                        포트폴리오 랜딩페이지 제작
                        <small>Portfolio Landing Page</small>
                    </h3>
                    <img src="asset/img/work/detail/mockup_01.png" alt="#">
                    <span class="main__detail_scroll"></span>
                </div>
                <div class="main__detail">
                    <figure class="main__detail_img"></figure>
                    <figcaption class="main__detail_text">
                        <p>Title<span>포트폴리오 랜딩페이지 제작</span></p>
                        <p>Period<span>2020-05 ~ 2020-06</span></p>
                        <p>Participation<span>기획 : 100%, 디자인 : 100%, 코딩 : 100%</span></p>
                        <p>Technology Stack<span>html5, css3, Javascript, SCSS, php, MySQL</span></p>
                        <p>Device<span>PC, Tablet, Mobile</span></p>
                        <p>Explanation
                            <span>1. 메인페이지 이미지, 텍스트 슬라이드 기능 구현(클릭, 휠, 자동)</span>
                            <span>2. Work페이지 리스트에 맞는 컨텐츠 뷰 구현</span>
                            <span>3. About페이지 마우스 휠을 이용한 원스크롤 페이지 구현</span>
                            <span>4. Contact페이지 사용자 정보를 서버로 전송하여 관리자가 관리하는 기능 구현</span>
                        </p>
                        <a href="https://jangyusu.github.io/project_portfolio" target="_blank"
                            class="main__detail_text_link">go to website.</a>
                    </figcaption>
                </div>
                <button type="button" class="main__detail_close"></button>
            </article> -->
            <!-- 포트폴리오 랜딩페이지 끝 -->
            <!-- 닌텐도 스위치 리뉴얼 시작 -->
            <!-- <article class="main__detail_wrapper">
                <div class="main__detail">
                    <h3 class="main__detail_title">
                        닌텐도 스위치 웹사이트 리뉴얼
                        <small>Nintendo Switch</small>
                    </h3>
                    <img src="asset/img/work/detail/mockup_02.png" alt="#">
                    <span class="main__detail_scroll"></span>
                </div>
                <div class="main__detail">
                    <figure class="main__detail_img"></figure>
                    <figcaption class="main__detail_text">
                        <p>Title<span>닌텐도 웹사이트 리뉴얼</span></p>
                        <p>Period<span>2020-04 ~ 2020-05</span></p>
                        <p>Participation<span>기획 : 100%, 디자인 : 100%, 코딩 : 100%</span></p>
                        <p>Technology Stack<span>html5, css3, Javascript, JQuery, SCSS</span></p>
                        <p>Device<span>PC, Tablet, Mobile</span></p>
                        <p>Explanation
                            <span>1. 메인페이지 이미지, 텍스트 슬라이드 기능 구현</span>
                            <span>2. 스크롤 시 헤더 슬라이드 및 높이에 따른 컨텐츠 슬라이드 기능 구현</span>
                            <span>3. 기본 스크롤을 없애고 직접 스크롤 제작</span>
                            <span>4. ajax를 통해 Json데이터를 이용하여 코드 간략화</span>
                            <span>5. 제품 리스트에 있는 목록을 찾을수 있는 검색시스템 기능 구현</span>
                            <span>6. 제품에 마우스를 올렸을 때 움직임에 따라 확대되는 기능 구현</span>
                            <span>7. 최상단으로 이동할 수 있는 버튼 구현</span>
                            <span>8. QnA 탭메뉴 구현</span>
                            <span>9. Software페이지를 flex-grow를 활용한 원페이지 레이아웃 구성</span>
                        </p>
                        <a href="https://jangyusu.github.io/Project_Switch" target="_blank"
                            class="main__detail_text_link">go to website.</a>
                    </figcaption>
                </div>
                <button type="button" class="main__detail_close"></button>
            </article> -->
            <!-- 닌텐도 스위치 리뉴얼 끝 -->
            <!-- 다크나이트 웹사이트 제작 시작 -->
            <!-- <article class="main__detail_wrapper">
                <div class="main__detail">
                    <h3 class="main__detail_title">
                        Batman DarkKnight 웹사이트 제작
                        <small>Batman DarkKnight</small>
                    </h3>
                    <img src="asset/img/work/detail/mockup_03.png" alt="#">
                    <span class="main__detail_scroll"></span>
                </div>
                <div class="main__detail">
                    <figure class="main__detail_img"></figure>
                    <figcaption class="main__detail_text">
                        <p>Title<span>배트맨 다크나이트 웹사이트 제작</span></p>
                        <p>Period<span>2020-03 ~ 2020-04</span></p>
                        <p>Participation<span>기획 : 100%, 디자인 : 100%, 코딩 : 100%</span></p>
                        <p>Technology Stack<span>html5, css3, Javascript</span></p>
                        <p>Device<span>PC, Tablet, Mobile</span></p>
                        <p>Explanation
                            <span>1. 첫번째 개인 프로젝트</span>
                            <span>2. 순수 자바스크립트만을 사용하여 코딩</span>
                            <span>3. 스크롤이 없는 원페이지 레이아웃으로 웹사이트 구성</span>
                            <span>4. 메뉴를 포함한 특정 버튼들을 눌렀을 때 이미지와 텍스트를 변경하여 페이지이동 구현</span>
                            <span>5. OST서브페이지 뮤직플레이어 기능 구현</span>
                            <span>6. 웹 페이지 로딩 시 로딩화면 구현</span>
                        </p>
                        <a href="https://jangyusu.github.io/project_Movie" target="_blank"
                            class="main__detail_text_link">go
                            to website.</a>
                    </figcaption>
                </div>
                <button type="button" class="main__detail_close"></button>
            </article> -->
            <!-- 다크나이트 웹사이트 제작 끝 -->
            <!-- 한국관광공사 리뉴얼 시작 -->
            <!-- <article class="main__detail_wrapper">
                <div class="main__detail">
                    <h3 class="main__detail_title">
                        한국관광공사 웹사이트 리뉴얼
                        <small>Korea Tourism Organization</small>
                    </h3>
                    <img src="asset/img/work/detail/mockup_04.png" alt="#">
                    <span class="main__detail_scroll"></span>
                </div>
                <div class="main__detail">
                    <figure class="main__detail_img"></figure>
                    <figcaption class="main__detail_text">
                        <p>Title<span>한국관광공사 웹사이트 리뉴얼</span></p>
                        <p>Period<span>2020-02 ~ 2020-03</span></p>
                        <p>Participation<span>기획 : 50%, 디자인 : 50%, 코딩 : 50%</span></p>
                        <p>Technology Stack<span>html5, css3, Javascript</span></p>
                        <p>Device<span>PC, Tablet, Mobile</span></p>
                        <p>Explanation
                            <span>1. 첫번째 팀 프로젝트</span>
                            <span>2. 메인페이지 및 서브페이지(정보공개, 국민참여, 사업, 알림) 100% 참여</span>
                            <span>3. 메인페이지 비주얼 슬라이드 구현(버튼 및 자동)</span>
                            <span>4. 최상단으로 이동할 수 있는 버튼 구현</span>
                            <span>5. 스크롤 시 header on/off 구현</span>
                        </p>
                        <a href="https://jangyusu.github.io/Project_Team" target="_blank"
                            class="main__detail_text_link">go
                            to website.</a>
                    </figcaption>
                </div>
                <button type="button" class="main__detail_close"></button>
            </article> -->
            <!-- 한국관광공사 리뉴얼 끝 -->
        </section>
        <!-- right 끝 -->
    </main>
    <!-- 메인 끝 -->
</body>

</html>