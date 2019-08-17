//make the function
function	madLibs()	{
	var adjective1 = prompt("Give me an adjective");
	var adjective2 = prompt("Give me another adjective");
	var ride = prompt("Favorite carnival ride");
	var restaurant = prompt("Favorite restaurant");
	var game = prompt("Favorite game");
	var hobby = prompt("Favorite hobby");
	alert("Thank you for playing");

//jQuery to display the story in the html	
	$('div').html("A vacation is when you take a trip to some "+adjective1+" place with your "+adjective2+" family. Usually you go to some place that is near a "+ride+" or a "+restaurant+"."+" A good vacation place is one where you can play "+game+" or "+hobby+"!" );
}
//call the function
madLibs();