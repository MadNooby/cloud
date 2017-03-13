<?php 
	


	$x=["Hard Work Beat Talent if Talent Doesn't Work Hard .","If you Kick me When i was done, You better pray i dont get up","If there is no One to hold your Hand, put Your hand in pocket and walk alone .","My parents gave Birth to a fuckin Legend","No One bought Lamborghini by working from  9am to 5pm .","My fellings for my Mom won't Give her a Great Life.My Hard Work And sactifies will.","Only A King can Attract A queen and only a queen can keep a king Focused","Hustlers dont sleep, we take power Naps","If you are Smartest In the room Then you are in the wrong room .","Some People Dreams of success while other stay Awake to Achieve it","Once Upon A time.. I win.The End","I wasn't Lucky, i deserved it","They call Us dreamers when we are the one who don't sleep","5:00 am when Legends either sleep or wake up",
	"Its better to cross the line and suffer the consequences then to just stare at the line for the rest of your life","I would rather work 16 hours a day for myself then 8 hours a day for someone else","I act poor , u act rich. we both are liers."];
	if(isset($_SERVER['HTTP_REFERER'])){
		echo $x[rand(0,count($x)-1)];
	}
	else{
		echo "You are not Authorized";
		echo $_SERVER['HTTP_REFERER'];
	}

 ?>