<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";

    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $contents = $_POST['contents'];

    $query = "insert into contact(name, company, email, tel, contents) values ('$name','$company','$email','$tel','$contents')";
    mq($query);

    echo "<script>sessionStorage.removeItem('check');</script>"; //sessionStorage check 제거
    echo "<script>alert('전송이 완료되었습니다. 빠른 시일내로 연락드리겠습니다.');</script>"; //전송 완료 알람
    echo "<script>location.href='contact.php';</script>"; //페이지 새로고침
?>