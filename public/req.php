<?php 
	


	$x=["Hard Work Beat Talent if Talent Doesn't Work Hard .","If you Kick me When i was done, You better pray i dont get up","If there is no One to hold your Hand, put Your hand in pocket and walk alone .","My parents gave Birth to a fuckin Legend","No One bought Lamborghini by working from  9am to 5pm .","My fellings for my Mom won't Give her a Great Life.My Hard Work And sactifies will.","Only A King can Attract A queen and only a queen can keep a king Focused","Hustlers dont sleep, we take power Naps","If you are Smartest In the room Then you are in the wrong room .","Some People Dreams of success while other stay Awake to Achieve it","Once Upon A time.. I win.The End"];
	if(isset($_SERVER['HTTP_REFERER'])){
		echo $x[rand(0,count($x)-1)];
	}
	else{
		echo "You are not Authorized";
		echo $_SERVER['HTTP_REFERER'];
	}

 ?>