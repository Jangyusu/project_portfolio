<?
    $host = 'localhost';
    $db_user = 'dbtnss2';
    $db_password = 'gosem9120!';
    $db_name = 'dbtnss2'; //user DB

    $dbcon = new mysqli($host, $db_user, $db_password, $db_name);

    function mq($sql) //쿼리명령문 함수
    {
        global $dbcon;
        return $dbcon->query($sql);
    }
?>

<meta charset="UTF-8">