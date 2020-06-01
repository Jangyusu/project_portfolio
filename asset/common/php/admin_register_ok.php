<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";

    $query = "select * from project";
    $result = mq($query);
    $next_row = mysqli_num_rows($result) + 1; //project 행길이 + 1

    
    //project 테이블 데이터
    $homeTitle = $_POST['homeTitle'];
    $homeImg = $_FILES['homeImg'];
    $workTitle = $_POST['workTitle'];
    $workSub = $_POST['workSub'];
    $date = $_POST['date'];

    //detail 테이블 데이터
    $title = $_POST['title'];
    $sub = $_POST['sub'];
    $visualImg = $_FILES['visualImg'];
    $previewImg = $_FILES['previewImg'];
    $workImg1 = $_FILES['workImg1'];
    $workImg2 = $_FILES['workImg2'];
    $workImg3 = $_FILES['workImg3'];
    $period = $_POST['period'];
    $participation = $_POST['participation'];
    $technology = $_POST['technology'];
    $device = $_POST['device'];
    $explanation = $_POST['explanation'];
    $link = $_POST['link'];


    //homeImg
    $homeImg['name'] = "bg_0$next_row.jpg";
    $homeImgName = $homeImg['name'];
    move_uploaded_file($homeImg['tmp_name'], '../../img/index/'.$homeImgName);

    //visualImg
    $visualImg['name'] = "bg_0$next_row.jpg";
    $visualImgName = $visualImg['name'];
    move_uploaded_file($visualImg['tmp_name'], '../../img/work/'.$visualImgName);

    //previewImg
    $previewImg['name'] = "preview_0$next_row.jpg";
    $previewName = $previewImg['name'];
    move_uploaded_file($previewImg['tmp_name'], '../../img/work/'.$visualImgName);

    //workImg1
    $workImg1['name'] = "detail_01_0$next_row.png";
    $workImg1Name = $workImg1['name'];
    move_uploaded_file($workImg1['tmp_name'], '../../img/work/detail/'.$workImg1Name);

    //workImg2
    $workImg2['name'] = "detail_02_0$next_row.jpg";
    $workImg2Name = $workImg2['name'];
    move_uploaded_file($workImg2['tmp_name'], '../../img/work/detail/'.$workImg2Name);

    //workImg3
    $workImg3['name'] = "detail_03_0$next_row.jpg";
    $workImg3Name = $workImg3['name'];
    move_uploaded_file($workImg3['tmp_name'], '../../img/work/detail/'.$workImg3Name);


    // project테이블 쿼리명령문 실행
    $query = "insert into project(homeTitle, homeImg, workTitle, workSub, date) values ('$homeTitle','$homeImgName','$workTitle','$workSub','$date')";
    mq($query);

    //detail테이블 쿼리명령문 실행
    $query = "insert into detail(title, sub, visualImg, previewImg, workImg1, workImg2, workImg3, period, participation, technology, device, explanation, link) values ('$title','$sub','$visualImgName','$previewName','$workImg1Name','$workImg2Name','$workImg3Name','$period','$participation','$technology','$device','$explanation','$link')";
    mq($query);

    page("등록이 완료되었습니다.", "admin_ok.php");
?>