<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";

    $name = $_POST['name']; //이름
    $company = $_POST['company']; //회사명
    $email = $_POST['email']; //이메일
    $tel = $_POST['tel']; //전화번호
    $contents = $_POST['contents']; //문의내용
    $date = date("Y-m-d H:i:s"); //현재 시간

    $query = "insert into contact(name, company, email, tel, contents, date) values ('$name','$company','$email','$tel','$contents', '$date')";
    mq($query);

    echo "<script>sessionStorage.removeItem('check');</script>"; //sessionStorage check 제거
    echo "<script>alert('전송이 완료되었습니다. 빠른 시일내로 연락드리겠습니다.');</script>"; //전송 완료 알람
    echo "<script>location.href='contact.php';</script>"; //페이지 새로고침
?>