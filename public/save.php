<?php 
	if(isset($_GET['save'])){
		file_put_contents('save.txt','\n\r'.($_GET['save']),FILE_APPEND);
		echo "done";
	}


 ?>