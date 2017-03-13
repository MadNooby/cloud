<?php 
session_start();
$user="superuser";
$passwd="mypassword";
if(isset($_GET['un']) && isset($_GET['pwd'])){
	if($_GET['un']===$user && $_GET['pwd']===$passwd){
		echo "found";
		$_SESSION['uname']="found";
	}
	else{
		echo "false";
	}
}

 ?>