<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";
?>

<style>
    form {
        width: 200px;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    input {
        margin-bottom: 10px;
    }
</style>

<body>
    <form action="admin_check.php" method="post">
    <input type="id" name="id" placeholder="id">
        <input type="password" name="pw" placeholder="pw">
        <input type="submit" value="로그인">
    </form>
</body>

</html>