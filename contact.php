<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/header.php";
?>

    <!-- 메인 시작 -->
    <main class="main">
        <!-- contact 시작 -->
        <section class="contact">
            <h2 class="contact__title">Contact</h2>
            <ul class="contact__list">
                <li>
                    <p>장유수</p>
                </li>
                <li>
                    <p>010. 2911. 6847</p>
                </li>
                <li>
                    <p>dbtnss@naver.com</p>
                </li>
            </ul>
        </section>
        <!-- contact 끝 -->
        <!-- question 시작 -->
        <section class="question">
            <p class="question__title">“문의하실 내용을 보내주시면 <span>빠른 시일 내로 연락드리겠습니다.”</span></p>
            <form action="#" class="question__form">
                <ul class="question__form_left">
                    <li>
                        <input type="text" id="name" name="name" class="question__form_typing">
                        <label for="name">*이름</label>
                    </li>
                    <li>
                        <input type="text" id="company" name="company" class="question__form_typing">
                        <label for="company">회사명</label>
                    </li>
                    <li>
                        <input type="email" id="email" name="email" class="question__form_typing">
                        <label for="email">*이메일</label>
                    </li>
                    <li>
                        <input type="tel" id="tel" name="tel" maxlength="13" required class="question__form_typing">
                        <label for="tel">*전화번호</label>
                    </li>
                </ul>
                <div class="question__form_right">
                    <textarea id="contents" name="contents" class="question__form_typing"></textarea>
                    <label for="contents">*문의내용</label>
                    <small>*는 필수 입력 사항입니다.</small>
                </div>
                <input type="submit" value="전송하기" class="question__form_submit">
            </form>
        </section>
        <!-- question 끝 -->
    </main>
    <!-- 메인 끝 -->
</body>

</html>