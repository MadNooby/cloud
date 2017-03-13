window.addEventListener('load',function(e){
	let wScroll=pageYOffset;

	document.addEventListener('scroll',function(){
		wScroll=pageYOffset;
		console.log(wScroll);
	});



});	