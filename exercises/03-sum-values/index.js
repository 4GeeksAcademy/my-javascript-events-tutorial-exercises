// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	const intA = parseInt(stringA);
	const intB = parseInt(stringB);
	const sumAB = intA + intB;

	let resultNumber = document.getElementById("resultNumber");
	resultNumber.value = sumAB;
};
