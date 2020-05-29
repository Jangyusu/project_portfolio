<?
    $host = 'localhost';
    $db_user = 'root';
    $db_password = '';
    $db_name = 'dbtnss2'; //user DB

    $dbcon = new mysqli($host, $db_user, $db_password, $db_name);

    function mq($sql)
    {
        global $dbcon;
        return $dbcon->query($sql);
    }
?>