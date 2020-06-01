<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";
?>

<style>
    h1 {
        margin: 0;
    }
    div {
        width:50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    form {
        display: flex;
        flex-direction: column;
    }
    p {
        margin: 20px 0 10px;
    }
    input, textarea {
        margin: 2px 0;
        line-height: 1.5rem;
    }
    textarea {
        height: 200px;
    }
</style>

<div>
    <h1>프로젝트 등록</h1>
    <form action="admin_register_ok.php" method="post" enctype="multipart/form-data">
        <p>★Project★</p>
        <input type="text" name="homeTitle" placeholder="PORTFOLIO RANDING">
        <input type="file" name="homeImg" placeholder="헤이요">
        <input type="text" name="workTitle" placeholder="포트폴리오 랜딩페이지 제작">
        <input type="text" name="workSub" placeholder="Portfolio Landing Page">
        <input type="text" name="date" placeholder="2020-06">
        <p>★Detail★</p>
        <input type="text" name="title" placeholder="포트폴리오 랜딩페이지 제작">
        <input type="text" name="sub" placeholder="Portfolio Landing Page">
        <input type="file" name="visualImg" placeholder="bg_04.jpg [1446x813]">
        <input type="file" name="previewImg" placeholder="preview_04.jpg 711x400]">
        <input type="file" name="workImg1" placeholder="detail_01_01.png [950x601]">
        <input type="file" name="workImg2" placeholder="detail_01_02.jpg [1920x1200]">
        <input type="file" name="workImg3" placeholder="detail_01_03.jpg [1920x1200]">
        <input type="text" name="period" placeholder="2020-05 ~ 2020-06">
        <input type="text" name="participation" placeholder="기획 : 100%, 디자인 : 100%, 코딩 : 100%">
        <input type="text" name="technology" placeholder="html5, css3, Javascript, SCSS, php, MySQL">
        <input type="text" name="device" placeholder="PC, Tablet, Mobile">
        <textarea name="explanation" placeholder="1. 메인페이지 이미지, 텍스트 슬라이드 기능 구현(클릭, 휠, 자동)"></textarea>
        <input type="text" name="link" placeholder="http://dbtnss2.dothome.co.kr">
        <input type="submit" value="등록하기">
    </form>
</div>