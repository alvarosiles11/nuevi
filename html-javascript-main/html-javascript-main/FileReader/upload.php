<?php

$uploadOk = 1;
$fileName = $_FILES["inpFile"]["name"];
$fileTmpName = $_FILES["inpFile"]["tmp_name"];
$fileExtsion = explode('.', $fileName);
$fileActualExtension = strtolower(end($fileExtsion));
$fileNewName = uniqid('').'.'.$fileActualExtsion;
$targetPath = "uploads/" . basename($fileNewName);


if ($_FILES["inpFile"]["size"] > 500000000) {
    $uploadOk = 0;
}

if ($uploadOk == 1) {
    move_uploaded_file($fileTmpName, $targetPath);
}

echo json_encode($fileNewName);

?>