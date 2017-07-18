window.addEventListener('load',function(e){
	let wScroll=pageYOffset;

	document.addEventListener('scroll',function(){
		wScroll=pageYOffset;
		console.log(wScroll);
	});



});	
window.addEventListener('load',function(){
	// let all=document.getElementsByClassName('imag');
	// for (var i = 0 ; i < all.length; i++) {
	// 	all[i].addEventListener("mouseover",function(e){
	// 		e.target.style.transform="scale(0.92)";
	// 		e.target.previousSibling.style.transform="scale(0.95)";
	// 	});
	// 	all[i].addEventListener("mouseout",function(e){
	// 		e.target.style.transform="scale(1)";
	// 		e.target.previousSibling.style.transform="scale(1)";
	// 	});
	// }
});