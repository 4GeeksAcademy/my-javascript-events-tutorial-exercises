window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
window.clickListener = function clickListener() {
	alert("woohoo!")
}

const greenButtonTwo = document.getElementById("theSecondGreen");

greenButtonTwo.onclick = function(){
	alert("woohoo2!")
}

const greenButtonThree = document.getElementById("theThirdGreen");

greenButtonThree.addEventListener("click", function(){
	alert("woohoo3!")
});

