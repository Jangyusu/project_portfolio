<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/common/php/db.php";

    $id = $_POST["id"];
    $pw = $_POST["pw"];
    
    if($id==="admin" && $pw==="9120") {
        page('관리자로 로그인 되었습니다.', 'asset/common/php/admin_ok.php');
    } else {
        page('관리자가 아닙니다.', 'admin.php');
    }
?>