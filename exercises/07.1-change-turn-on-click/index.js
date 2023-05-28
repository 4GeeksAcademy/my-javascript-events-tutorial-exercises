var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	userRandomizer = Math.floor(Math.random()*10)+1
	if (currentUser == "Mario") {
		userRandomizer > 5 ? currentUser = "Juan" : currentUser = "Josh";
	}else if (currentUser == "Juan"){
		userRandomizer > 5 ? currentUser = "Mario" : currentUser = "Josh";
	}else {
		userRandomizer > 5 ? currentUser = "Juan" : currentUser = "Mario";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
