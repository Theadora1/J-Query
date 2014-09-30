
$(document).ready(function() {

	// //show

	// $("h1").show();

	// //hide

	// // $("p").hide();

	// //fade out

	// // $(".box").fadeOut();

	// //fade in

	// // $(".box").faceIn();

	// //fade out over time

	// // $(".box").fadeOut(1000);

	// //fade in over time

	// // $(".box").fadeIn(3000);

	// //slide up

	// $("#first-paragraph").slideUp(3000);

	// //slide down

	// $("#first-paragraph").slideDown(6000);

	// //animate

	// $( ".box" ).animate ({
	// 	opacity: 0.25,
	// 	height: "70px"
	// } , 2000 );

	// //click with alert function

	// $("p").click(
	// 	function() 
	// 	{
	// 		alert('clicked!');
	// 	}
	// );

	//part 2 of homework

	// headline to hide and fade in Nikki

	$("h1").hide();
	$("h1").fadeIn(2000);

	// slide up

	$("#first-paragraph").slideUp(2000);

	// click event images

	$(".Nikki").click( function(){
		alert('I have my shots!');
	});

});
