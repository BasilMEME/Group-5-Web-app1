<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
    exit();
}

$conn = new mysqli("localhost", "root", "", "student_db2");
$id = $_GET['id'];
$conn->query("DELETE FROM students WHERE id=$id");
header("Location: view.php");
exit();
?>